import { useEffect, useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {
  ArrowLeft, ArrowRight, BookOpen, CheckCircle2, ChevronRight, Compass,
  ExternalLink, FileText, Filter, GitCompareArrows, GraduationCap, Landmark,
  Menu, Search, ShieldCheck, Sparkles, X, AlertTriangle
} from 'lucide-react'
import contentJson from './generated/content.json'
import pathsJson from './generated/paths.json'
import type { ExposurePoint, Framework, Instrument, Posture, Provenance, ProvenanceStatus, SiteContent, StateProfile } from './types'

const content = contentJson as SiteContent
const mapPaths = pathsJson as Record<string, string>

const postureMeta: Record<Posture, {label:string; short:string; color:string}> = {
  mandate: {label:'Enacted requirement', short:'Mandate', color:'#e6a44f'},
  guidance: {label:'Guidance or framework', short:'Guidance', color:'#4faea5'},
  pending: {label:'Pending legislation', short:'Pending', color:'#8FAFC4'},
  absent: {label:'No state-agency guidance', short:'No guidance', color:'#6E86A8'}
}

// Methodology is reachable from the footer and no longer holds a nav slot.
const navItems = [
  ['overview', 'Overview'], ['states', 'Explore states'], ['frameworks', 'Adopt from K–12'],
  ['compare', 'Compare'], ['readiness', 'Find your gap']
]

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function routeTo(route: string) {
  window.location.hash = route
  window.scrollTo({top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'})
}

function useRoute() {
  const [route, setRoute] = useState(window.location.hash.replace(/^#\/?/, '') || 'overview')
  useEffect(() => {
    const update = () => setRoute(window.location.hash.replace(/^#\/?/, '') || 'overview')
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  return route
}

function Markdown({children, compact=false}: {children:string; compact?:boolean}) {
  return <div className={`prose ${compact ? 'prose-compact' : ''}`}>
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
      a: props => <a {...props} target="_blank" rel="noreferrer" />,
      h3: props => <h3 {...props} />
    }}>{children}</ReactMarkdown>
  </div>
}

function Badge({posture}: {posture:Posture}) {
  const meta = postureMeta[posture]
  return <span className="status-badge" style={{'--status': meta.color} as React.CSSProperties}>
    <i />{meta.label}
  </span>
}

// Three states, read from provenance.json rather than inferred. The middle value is
// the honest one: the document exists and nobody has checked the claims against it.
const provenanceMeta: Record<ProvenanceStatus, {label:string; short:string; blurb:string}> = {
  read: {
    label: 'Primary document checked',
    short: 'Checked',
    blurb: 'Someone opened the issuing agency’s own document and checked this profile’s claims against it.'
  },
  downloaded: {
    label: 'Document held, claims unchecked',
    short: 'Unchecked',
    blurb: 'The primary document is captured, but its claims have not yet been verified line by line.'
  },
  none: {
    label: 'No primary document',
    short: 'No document',
    blurb: 'No primary document was captured. The profile rests on the provenance ledger and secondary reporting.'
  }
}

function EvidenceBadge({provenance}: {provenance:Provenance}) {
  const meta = provenanceMeta[provenance.status]
  return <span className={`evidence ${provenance.status}`} title={meta.blurb}>
    {provenance.status === 'read' ? <ShieldCheck size={14}/> : provenance.status === 'downloaded' ? <FileText size={14}/> : <AlertTriangle size={14}/>}
    {meta.label}
  </span>
}

function Header({route}: {route:string}) {
  const [open, setOpen] = useState(false)
  const active = route.split('/')[0]
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <button className="brand" onClick={() => routeTo('overview')} aria-label="Go to overview">
        <b>What Your Students Were Taught About AI</b>
        <small>K–12 AI policy in all 52 US school systems, and what it means for higher education</small>
      </button>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        {open ? <X/> : <Menu/>}
      </button>
      <nav className={open ? 'open' : ''} aria-label="Primary navigation">
        {navItems.map(([id,label]) => <button key={id} className={active === id ? 'active' : ''} onClick={() => {routeTo(id); setOpen(false)}}>{label}</button>)}
      </nav>
    </header>
  </>
}

function PageIntro({eyebrow, title, children}: {eyebrow:string; title:string; children:React.ReactNode}) {
  return <div className="page-intro">
    <p className="eyebrow">{eyebrow}</p>
    <h1>{title}</h1>
    <div className="lede">{children}</div>
  </div>
}

function ScaleBlock({instrument}: {instrument:Instrument}) {
  return <section className="scale-section">
    <div className="scale-head">
      <p className="eyebrow">What this looks like</p>
      <div>
        <h2>This is a state instrument, not a suggestion.</h2>
        <p>Oklahoma’s education agency publishes a five-level AI permission scale adapted from Perkins, Furze, Roe and MacVaugh (2024). Every assignment carries one of these levels. The level is posted and taught. Three other states publish a scale attributing the same peer-reviewed source.</p>
      </div>
    </div>

    <div className="scale-table">
      <div className="scale-cols"><span>Level</span><span>Name</span><span>What it permits</span><span>Disclosure required</span></div>
      {instrument.levels.map(l => <div className="lvl" key={l.n}>
        <div className="lvl-n">{l.n}</div>
        <div className="lvl-name">{l.label}</div>
        <div className="lvl-permits">{l.permits}</div>
        <div className="lvl-disc">{l.disclose}</div>
      </div>)}
    </div>

    <p className="scale-foot"><b>Read the disclosure column.</b> Permission and disclosure move together, and from Level 1 upward the student submits links to the AI chats themselves. Most university syllabi carry neither a level nor a disclosure format, which leaves the student to infer both.</p>
    <p className="scale-foot">
      Source. {instrument.agency}, <i>{instrument.source}</i>. The scale carries the credit line “{instrument.attribution}” <b>Primary-source verified {instrument.verifiedOn}.</b>{' '}
      <a href={instrument.url} target="_blank" rel="noreferrer">Open the document <ExternalLink size={12}/></a>
    </p>
  </section>
}

function HomeMap() {
  const [selected, setSelected] = useState('Oklahoma')
  const state = content.states.find(s => s.name === selected) || content.states[0]
  return <section className="home-map">
    <div className="scale-head">
      <p className="eyebrow">Start with your own state</p>
      <div><h2>What were your students taught before they got here?</h2></div>
    </div>
    <div className="explorer-grid" style={{marginTop:34}}>
      <div>
        <USMap states={content.states} selected={selected} onSelect={setSelected}/>
        <div className="map-legend">{(Object.keys(postureMeta) as Posture[]).map(p => <span key={p}><i style={{background:postureMeta[p].color}}/>{postureMeta[p].label}</span>)}</div>
      </div>
      <StateSummary state={state}/>
    </div>
  </section>
}

function Overview() {
  const counts = useMemo(() => content.states.reduce((a,s) => ({...a, [s.posture]:(a[s.posture]||0)+1}), {} as Record<string,number>), [])
  const okScale = content.instruments.find(i => i.id === 'oklahoma-aaurs')
  return <>
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">A primary-source guide for university faculty and leaders</p>
        <h1>Your incoming students have been <em>governed by AI policy</em> for three years.</h1>
        <p className="hero-what">This site documents the AI rules in all 52 US school systems and what they mean for university teaching.</p>
        <p className="hero-lede">State education agencies wrote leveled permission scales, disclosure conventions, and detector positions for the classroom. Universities receive the students those rules produced, then hand the question back to each individual instructor.</p>
        <div className="hero-actions">
          <button className="primary-action" onClick={() => routeTo('states')}><Compass size={18}/> Explore your state</button>
          <button className="secondary-action" onClick={() => routeTo('frameworks')}><Sparkles size={18}/> Browse adoptable practices</button>
        </div>
        <p className="record-line">Research current through July 2026</p>
      </div>
      <div className="hero-aside" aria-label="Coverage summary">
        <span className="hero-number">52</span><b>jurisdictions analyzed</b>
        <p>50 states, the District of Columbia, and Puerto Rico. Each profile traces its claims to the jurisdiction’s supplied documents.</p>
        <div className="mini-legend">
          {(Object.keys(postureMeta) as Posture[]).map(p => <span key={p}><i style={{background:postureMeta[p].color}}/>{counts[p] || 0} {postureMeta[p].short.toLowerCase()}</span>)}
        </div>
      </div>
    </section>

    {okScale && <ScaleBlock instrument={okScale}/>}

    <HomeMap/>

    <section className="gap-section">
      <div className="gap-heading">
        <p className="eyebrow">The K–12 to higher-ed gap</p>
        <h2>K–12 standardized what higher education only advised.</h2>
      </div>
      <div className="gap-argument">
        <p>Higher education produced abundant knowledge and abundant advice, then delegated the actual decision to each individual instructor and called that delegation a policy. The characteristic higher-ed output is a resource page that ends with “instructors should state their own policy.”</p>
        <p>K–12 state agencies did something structurally different. They published common instruments, shared vocabularies, and disclosure conventions. In a growing number of states, they also established mandates with deadlines. The characteristic K–12 output is the policy.</p>
        <div className="scholarship-callout">
          <span>The sharpest formulation</span>
          <h3>Our own scholarship now governs high-school classrooms and not our own.</h3>
          <p>University researchers built the AI Assessment Scale. Four state school systems printed it, taught it, and put it in front of teenagers. The universities those teenagers now attend, by and large, have not.</p>
          <p>This is not a story about higher education being ignorant or idle. It is a story about higher education declining to govern itself with knowledge it created, a more uncomfortable and more defensible indictment than “we did less.”</p>
        </div>
      </div>
      <p className="framing-note">The K–12 side is documented by this project’s 52-jurisdiction corpus. The characterization of higher education is author framing and should be tested against an institution’s own policies and syllabi.</p>
    </section>

    <section className="cta-panel">
      <div><p className="eyebrow">Start with the practical question</p><h2>What did your state build?</h2><p>Open a state profile for its policy posture, student-use instruments, higher-ed implications, evidence gaps, and primary sources.</p></div>
      <button onClick={() => routeTo('states')}>Explore all jurisdictions <ArrowRight size={18}/></button>
    </section>
  </>
}

function USMap({states, selected, onSelect}: {states:StateProfile[]; selected?:string; onSelect:(name:string)=>void}) {
  const stateByName = Object.fromEntries(states.map(s => [s.name,s]))
  return <div className="map-wrap">
    <svg viewBox="-62 0 1040 615" role="group" aria-label="United States K–12 AI policy map">
      {Object.entries(mapPaths).map(([name,d]) => {
        const state = stateByName[name]
        if (!state) return null
        return <path key={name} d={d} fill={postureMeta[state.posture].color} className={selected===name?'selected':''}
          tabIndex={0} role="button" aria-label={`${name}: ${postureMeta[state.posture].label}`}
          onClick={() => onSelect(name)} onKeyDown={e => {if(e.key==='Enter'||e.key===' '){e.preventDefault();onSelect(name)}}}/>
      })}
    </svg>
    <button className="territory-card" onClick={() => onSelect('Puerto Rico')}><span>PR</span><b>Puerto Rico</b><small>Territory-wide directive</small></button>
  </div>
}

// What a student arriving from this state may already have been taught. This is the
// question a professor is actually asking, so it leads. The Executive Summary, which
// describes what the state published, moves further down the profile.
function GraduateProfile({state, limit}: {state:StateProfile; limit:number}) {
  const items = (state.graduateProfile || []).slice(0, limit)
  if (!items.length) return null
  return <div className="grad-profile">
    <p className="grad-title">What a student arriving from {state.name} may bring</p>
    <ul>{items.map((t,i) => <li key={i}>{t}</li>)}</ul>
  </div>
}

function StateSummary({state}: {state:StateProfile}) {
  return <aside className="state-summary" aria-live="polite">
    <div className="summary-top"><Badge posture={state.posture}/><span className="state-code">{state.abbreviation}</span></div>
    <h2>{state.name}</h2>
    <p className="authority">{state.authority}</p>
    <GraduateProfile state={state} limit={3}/>
    <dl className="quick-facts">
      <div><dt>Student-use instrument</dt><dd>{state.instrument}</dd></div>
      <div><dt>Higher-ed connection</dt><dd>{state.higherEdHook}</dd></div>
    </dl>
    <EvidenceBadge provenance={state.provenance}/>
    <button className="primary-action full" onClick={() => routeTo(`states/${slug(state.name)}`)}>Open full profile <ArrowRight size={17}/></button>
  </aside>
}

function StateExplorer() {
  const [query,setQuery] = useState('')
  const [filters,setFilters] = useState<Posture[]>([])
  const [tag,setTag] = useState('')
  const [selected,setSelected] = useState('Oklahoma')
  const tags = ['Assignment instrument','Detector position','Higher-ed connection','Developmental guidance','Privacy']
  const filtered = content.states.filter(s => (!query || `${s.name} ${s.abbreviation}`.toLowerCase().includes(query.toLowerCase())) && (!filters.length || filters.includes(s.posture)) && (!tag || s.tags.includes(tag)))
  const selectedState = filtered.find(s=>s.name===selected) || filtered[0] || content.states[0]
  const toggle = (p:Posture) => setFilters(f => f.includes(p) ? f.filter(x=>x!==p) : [...f,p])
  return <>
    <PageIntro eyebrow="Explore the evidence" title="State and territory profiles">Select a jurisdiction to see its legal posture, instruments, expected graduate profile, higher-education implications, and underlying sources.</PageIntro>
    <div className="explorer-tools">
      <label className="search-box"><Search size={18}/><span className="sr-only">Search jurisdictions</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search a state or abbreviation"/></label>
      <div className="filter-row" aria-label="Filter by policy posture">
        <Filter size={16}/>{(Object.keys(postureMeta) as Posture[]).map(p=><button key={p} className={filters.includes(p)?'active':''} onClick={()=>toggle(p)}><i style={{background:postureMeta[p].color}}/>{postureMeta[p].short}</button>)}
      </div>
      <div className="filter-row secondary-filters" aria-label="Filter by policy feature">
        {tags.map(t=><button key={t} className={tag===t?'active':''} onClick={()=>setTag(tag===t?'':t)}>{t}</button>)}
      </div>
    </div>
    <div className="explorer-grid">
      <div>
        <USMap states={filtered} selected={selectedState.name} onSelect={setSelected}/>
        <div className="map-legend">{(Object.keys(postureMeta) as Posture[]).map(p=><span key={p}><i style={{background:postureMeta[p].color}}/>{postureMeta[p].label}</span>)}</div>
      </div>
      <StateSummary state={selectedState}/>
    </div>
    <div className="state-index-head"><h2>All matching jurisdictions</h2><span>{filtered.length} of 52</span></div>
    <div className="state-index">
      {filtered.map(s=><button key={s.name} onClick={()=>routeTo(`states/${slug(s.name)}`)}><i style={{background:postureMeta[s.posture].color}}/><span><b>{s.name}</b><small>{s.authority}</small></span><ChevronRight size={17}/></button>)}
    </div>
  </>
}

// Order matters. Object key order drives both the section sequence and the on-page
// nav. Learning and cognitive offloading leads because it describes what happened to
// the student, which is the reader's question. The policy description follows.
const stateSectionLabels: Record<string,string> = {
  offloading:'Learning and cognitive offloading', policy:'K–12 policy and guidance', graduate:'Expected graduate profile',
  implications:'Implications for higher education', response:'Recommended higher-education response', unique:'Distinctive approaches', gaps:'Evidence gaps and uncertainties'
}

function StateDetail({state}: {state:StateProfile}) {
  return <>
    <button className="back-link" onClick={()=>routeTo('states')}><ArrowLeft size={16}/> Back to the state explorer</button>
    <div className="state-hero">
      <div><Badge posture={state.posture}/><p className="eyebrow">{state.abbreviation} · Jurisdiction profile</p><h1>{state.name}</h1>
        <GraduateProfile state={state} limit={5}/>
        <button className="primary-action" onClick={()=>routeTo(`readiness/${slug(state.name)}`)}>Find your gap against {state.name} <ArrowRight size={17}/></button>
      </div>
      <div className="state-hero-meta"><EvidenceBadge provenance={state.provenance}/><b>Authority and force</b><p>{state.authority}</p></div>
    </div>
    <div className="profile-layout">
      <aside className="profile-nav"><b>On this page</b>{Object.keys(stateSectionLabels).map(k=><button key={k} onClick={()=>document.getElementById(`section-${k}`)?.scrollIntoView()}>{stateSectionLabels[k]}</button>)}</aside>
      <div className="profile-content">
        <section className="profile-section">
          <p className="eyebrow">What {state.name} published</p>
          <p className="published-summary">{state.summary}</p>
        </section>
        <section className="evidence-snapshot">
          <h2>Evidence snapshot</h2>
          <dl><div><dt>Student-use instrument</dt><dd>{state.instrument}</dd></div><div><dt>Detector position</dt><dd>{state.detector}</dd></div><div><dt>Cognitive offloading</dt><dd>{state.offloading}</dd></div><div><dt>Higher-ed connection</dt><dd>{state.higherEdHook}</dd></div></dl>
        </section>
        {Object.entries(stateSectionLabels).map(([key,label])=><section className="profile-section" id={`section-${key}`} key={key}><p className="eyebrow">{label}</p><Markdown>{state.sections[key] || 'Not found in the provided documents.'}</Markdown></section>)}
        <section className="sources-section"><p className="eyebrow">Source documents</p><h2>Documents reviewed</h2>
          <div className="source-cards">{state.documents.map(d=><article key={d.filename}><FileText/><div><b>{d.title || d.filename}</b><p>{d.issuer}</p><small>{d.date} · {d.type}</small></div></article>)}</div>
          {state.sourceUrls.length>0 && <details><summary>Open recorded source URLs ({state.sourceUrls.length})</summary><ul>{state.sourceUrls.map(url=><li key={url}><a href={url} target="_blank" rel="noreferrer">{url} <ExternalLink size={13}/></a></li>)}</ul></details>}
        </section>
      </div>
    </div>
  </>
}

const frameworkIcons = [BookOpen, Compass, ShieldCheck, CheckCircle2, GraduationCap, Sparkles, GraduationCap, ShieldCheck, Landmark, CheckCircle2]

function FrameworkLibrary() {
  return <>
    <PageIntro eyebrow="A practical library" title="Adopt from K–12">The best state documents do more than state principles. They ship usable scales, rubrics, safeguards, and implementation patterns that universities can adapt.</PageIntro>
    <section className="featured-adopt"><div><p className="eyebrow">If you adopt only three things</p><h2>Begin with clarity, protected learning, and due process.</h2></div><Markdown compact>{content.featuredFrameworks}</Markdown></section>
    <div className="framework-grid">{content.frameworks.map((f,i)=>{
      const Icon=frameworkIcons[i]
      return <button className="framework-card" key={f.id} onClick={()=>routeTo(`frameworks/${f.id}`)}><span className="framework-number">{String(f.number).padStart(2,'0')}</span><Icon/><h2>{f.title}</h2><p>{f.summary}</p><span>{f.states.length} jurisdictions referenced <ArrowRight size={16}/></span></button>
    })}</div>
  </>
}

function FrameworkDetail({framework}: {framework:Framework}) {
  return <>
    <button className="back-link" onClick={()=>routeTo('frameworks')}><ArrowLeft size={16}/> Back to the practice library</button>
    <div className="framework-hero"><span>{String(framework.number).padStart(2,'0')}</span><div><p className="eyebrow">Practice family</p><h1>{framework.title}</h1><p>{framework.summary}</p></div></div>
    <div className="framework-detail-grid">
      <article className="longform"><Markdown>{framework.body}</Markdown></article>
      <aside><p className="eyebrow">Jurisdictions referenced</p><div className="state-chips">{framework.states.map(name=><button key={name} onClick={()=>routeTo(`states/${slug(name)}`)}>{name}<ChevronRight size={14}/></button>)}</div><button className="secondary-action full" onClick={()=>routeTo('compare')}><GitCompareArrows size={17}/> Compare jurisdictions</button></aside>
    </div>
  </>
}

function Compare() {
  const [selected,setSelected] = useState(['Oklahoma','Texas'])
  const fields: [string,keyof StateProfile][] = [['Authority and force','authority'],['Student-use instrument','instrument'],['Detector position','detector'],['Cognitive-offloading treatment','offloading'],['Higher-ed connection','higherEdHook']]
  const profiles = selected.map(n=>content.states.find(s=>s.name===n)!).filter(Boolean)
  const add = () => {const next=content.states.find(s=>!selected.includes(s.name)); if(next&&selected.length<4)setSelected([...selected,next.name])}
  return <>
    <PageIntro eyebrow="Side-by-side" title="Compare jurisdictions">Select two to four jurisdictions. Compare the dimensions that most directly shape incoming student expectations and institutional response.</PageIntro>
    <div className="compare-controls">{selected.map((name,i)=><label key={i}><span>Jurisdiction {i+1}</span><select value={name} onChange={e=>setSelected(selected.map((n,x)=>x===i?e.target.value:n))}>{content.states.filter(s=>s.name===name||!selected.includes(s.name)).map(s=><option key={s.name}>{s.name}</option>)}</select>{selected.length>2&&<button onClick={()=>setSelected(selected.filter((_,x)=>x!==i))} aria-label={`Remove ${name}`}><X size={15}/></button>}</label>)}{selected.length<4&&<button className="add-compare" onClick={add}>+ Add jurisdiction</button>}</div>
    <div className="compare-table-wrap"><table className="compare-table"><thead><tr><th>Dimension</th>{profiles.map(s=><th key={s.name}><Badge posture={s.posture}/><button onClick={()=>routeTo(`states/${slug(s.name)}`)}>{s.name}<ArrowRight size={15}/></button></th>)}</tr></thead><tbody>{fields.map(([label,key])=><tr key={label}><th>{label}</th>{profiles.map(s=><td key={s.name}>{String(s[key])}</td>)}</tr>)}</tbody></table></div>
    <p className="comparison-note">A mandate to adopt a policy is not necessarily a mandate about policy content. District adoption and student exposure can vary even in states with enacted requirements.</p>
  </>
}

// What this jurisdiction itself published on this point.
//
// Only three of the six points have a verified field on the state profile. The
// other three are NOT inferred by scanning the analysis text, because a keyword
// scan cannot tell "the state published an appeal path" from "the state published
// no appeal path" and would mark absence states as compliant. Where the project
// holds no verified field, the card says so rather than guessing.
function stateFact(point: ExposurePoint, state: StateProfile) {
  if (point.field) {
    const value = (state[point.field] || '').trim()
    // Placeholder values in the corpus mean "nothing recorded", not a finding.
    const empty = !value || /^(none|not captured|not addressed|not found|n\/a|see state analysis)\.?$/i.test(value)
    if (!empty) return {text:value, kind:'field' as const}
  }
  if (state.posture === 'absent') {
    return {text:'No state-agency guidance was located for this jurisdiction, so nothing was published on this.', kind:'gap' as const}
  }
  return {text:'This project does not hold a separate verified position on this for ' + state.name + '. Open the profile to read the guidance itself.', kind:'gap' as const}
}

function ExposureCard({point, index, state}: {point:ExposurePoint; index:number; state?:StateProfile}) {
  const [open,setOpen] = useState(index === 4)
  const fact = state ? stateFact(point, state) : null
  return <div className={`xp-card ${open ? 'open' : ''}`}>
    <div className="xp-cardhead" role="button" tabIndex={0} aria-expanded={open}
      onClick={()=>setOpen(!open)}
      onKeyDown={e => {if(e.key==='Enter'||e.key===' '){e.preventDefault();setOpen(!open)}}}>
      <div className="xp-n">{String(index+1).padStart(2,'0')}</div>
      <div>
        <h3>{point.title}</h3>
        <div className="xp-three">
          <div className="xp-taught"><span className="xp-lbl">What they were taught</span><p>{point.taught}</p></div>
          <div className="xp-says"><span className="xp-lbl">What your syllabus probably says</span><p>{point.says}</p></div>
          <div className="xp-fails"><span className="xp-lbl">Who this fails</span><p>{point.fails}</p></div>
        </div>
        {fact && state && <div className={`xp-instate ${fact.kind}`}>
          <span className="xp-lbl">In {state.name}</span>
          <p>{fact.text}</p>
        </div>}
      </div>
      <div className="xp-chev"><ChevronRight size={17}/></div>
    </div>

    {open && <div className="xp-close">
      <div className="xp-block">
        <h4>The position to take</h4>
        <div className="xp-pos"><p>{point.position}</p></div>
      </div>
      <div className="xp-block">
        <h4>What the evidence supports</h4>
        <p>{point.evidence}</p>
        <div className="xp-chips">{point.chips.map(c => <span className="xp-chip" key={c}>{c}</span>)}</div>
      </div>
      <div className="xp-block">
        <h4>The objection you will hear first</h4>
        <div className="xp-obj">
          {point.objection.draft && <span className="xp-draft">Newly drafted, needs author approval</span>}
          <p className="xp-q">{point.objection.q}</p>
          {point.objection.a.map((p,i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </div>}
  </div>
}

// The diagnostic is national. A jurisdiction is shown only when the reader arrived
// from a state profile, at #readiness/<state>, so state context is carried in
// rather than chosen from a 52-item control that changed very little.
function Readiness({stateSlug}: {stateSlug?:string}) {
  const xp = content.exposure
  const [fork,setFork] = useState<'faculty'|'institution'>('faculty')
  const state = stateSlug ? content.states.find(s => slug(s.name) === stateSlug) : undefined
  const hasHook = !!state?.higherEdHook && !/^(none|no explicit|not )/i.test(state.higherEdHook.trim())
  const points = xp.points.filter(p => p.owner === fork)
  const mandates = content.states.filter(s => s.posture === 'mandate').length

  return <>
    <section className="xp-long">
      <p className="eyebrow">Find your gap</p>
      <h1 className="xp-verdict">{xp.headline} <em>{xp.headlineEm}</em></h1>
      {state
        ? <>
            <div className="xp-context">
              <span className="status-badge" style={{'--status': postureMeta[state.posture].color} as React.CSSProperties}><i/>{postureMeta[state.posture].label}</span>
              <b>{state.name}</b>
              <button onClick={()=>routeTo('readiness')}>Show the national view <X size={13}/></button>
            </div>
            <p className="xp-hook">{hasHook ? `${state.higherEdHook}.` : xp.noHook}</p>
          </>
        : <p className="xp-hook">Fifty-two school systems wrote rules for AI in the classroom and {mandates} of them carry an enacted requirement. Below are six of those rules, and what your syllabus would have to say to answer each one.</p>}
    </section>

    <section className="xp-pre">
      <p className="eyebrow">How to read this</p>
      <div>{xp.preshow.map((p,i) => <p key={i}>{p}</p>)}</div>
    </section>

    <section className="xp-med">
      <div className="xp-head">
        <div>
          <p className="eyebrow">The exposure map</p>
          <h2>Six things your students expect that your syllabus probably does not say</h2>
        </div>
        <div className="xp-fork">
          <button className={fork==='faculty'?'on':''} onClick={()=>setFork('faculty')}>What I control as faculty</button>
          <button className={fork==='institution'?'on':''} onClick={()=>setFork('institution')}>What only the institution controls</button>
        </div>
      </div>
      <p className="xp-tally">{state ? `Each point also carries what ${state.name} itself published. ` : ''}Open one for the position to take, the evidence behind it, and the objection you will hear first. Showing {points.length} of {xp.points.length}.</p>
      <div className="xp-cards">
        {points.map(p => <ExposureCard key={`${p.id}-${state?.name || 'national'}`} point={p} index={xp.points.indexOf(p)} state={state}/>)}
      </div>
    </section>

    <section className="roadmap"><p className="eyebrow">If you are building the institutional response</p><Markdown>{content.readiness.roadmap}</Markdown></section>
  </>
}

function Methodology() {
  const counts = content.states.reduce((a,s) => ({...a, [s.provenance.status]:(a[s.provenance.status]||0)+1}), {} as Record<string,number>)
  const order: ProvenanceStatus[] = ['read','downloaded','none']
  return <>
    <PageIntro eyebrow="How far each claim has been checked" title="Evidence and provenance">
      This guide distinguishes what a jurisdiction published from what this project has actually opened and read. Every profile carries one of three ratings, and the ratings are recorded per jurisdiction rather than inferred.
    </PageIntro>

    <section className="prov-summary">
      {order.map(k => <article key={k} className={`prov-card ${k}`}>
        <span className="prov-count">{counts[k] || 0}</span>
        <b>{provenanceMeta[k].label}</b>
        <p>{provenanceMeta[k].blurb}</p>
      </article>)}
    </section>

    <p className="framing-note">Verification so far covers the student-use instrument for every state publishing one, the detector position for every state with a captured document, and the higher-education hook for the states whose statutes name universities. The remaining guidance claims in a profile are not individually verified even where the rating is “{provenanceMeta.read.label}”.</p>

    <section className="prov-table-wrap">
      <h2>All 52 jurisdictions</h2>
      <table className="prov-table">
        <thead><tr><th>Jurisdiction</th><th>Rating</th><th>Documents held</th><th>What was checked</th></tr></thead>
        <tbody>
          {content.states.map(s => <tr key={s.name}>
            <th scope="row"><button onClick={()=>routeTo(`states/${slug(s.name)}`)}>{s.name}</button></th>
            <td><span className={`prov-pill ${s.provenance.status}`}>{provenanceMeta[s.provenance.status].short}</span></td>
            <td className="prov-docs">{s.provenance.documents.length ? s.provenance.documents.join(', ') : <i>none</i>}</td>
            <td className="prov-note">{s.provenance.note || <i>Not yet checked.</i>}</td>
          </tr>)}
        </tbody>
      </table>
    </section>

    <div className="method-grid">
      <article><span>01</span><h2>Primary documents first</h2><p>State profiles are generated from 52 jurisdiction analyses built on statutes, agency guidance, and model policies. Where this project has opened the document itself, the table above says so.</p></article>
      <article><span>02</span><h2>Legal force stays visible</h2><p>Enacted requirements, voluntary guidance, pending legislation, and state-agency absence are separate categories. A proposed bill is never presented as current law.</p></article>
      <article><span>03</span><h2>Exposure is not assumed</h2><p>Most guidance is voluntary and locally implemented. A state instrument shows what students may have encountered, not what every graduate necessarily learned.</p></article>
      <article><span>04</span><h2>Errors are published, not buried</h2><p>Where a claim failed verification it is marked in the table rather than quietly removed. Three claims failed on 30 July 2026 and are recorded against Georgia, Missouri, and North Dakota.</p></article>
    </div>

    <section className="legend-panel">
      <div><h2>Policy posture</h2>{(Object.keys(postureMeta) as Posture[]).map(p => <p key={p}><i style={{background:postureMeta[p].color}}/><b>{postureMeta[p].label}</b><span>{p==='mandate'?'An enacted requirement affects K–12 policy, curriculum, or governance.':p==='guidance'?'An agency or state-recognized body published a framework or resource.':p==='pending'?'A relevant proposal is active or recorded, but is not enacted.':'No state-agency classroom-use guidance was located in the supplied corpus.'}</span></p>)}</div>
      <div><h2>Provenance rating</h2>{order.map(k => <p key={k}><i className={`prov-dot ${k}`}/><b>{provenanceMeta[k].label}</b><span>{provenanceMeta[k].blurb}</span></p>)}</div>
    </section>

    <section className="limitations"><p className="eyebrow">Standing limitations</p><Markdown>{content.readiness.limitations}</Markdown></section>
  </>
}

function App() {
  const route = useRoute()
  const parts = route.split('/')
  let view: React.ReactNode
  if (parts[0]==='states' && parts[1]) {
    const state=content.states.find(s=>slug(s.name)===parts[1]); view=state?<StateDetail state={state}/>:<StateExplorer/>
  } else if (parts[0]==='frameworks' && parts[1]) {
    const framework=content.frameworks.find(f=>f.id===parts[1]); view=framework?<FrameworkDetail framework={framework}/>:<FrameworkLibrary/>
  } else if (parts[0]==='states') view=<StateExplorer/>
  else if (parts[0]==='frameworks') view=<FrameworkLibrary/>
  else if (parts[0]==='compare') view=<Compare/>
  else if (parts[0]==='readiness') view=<Readiness stateSlug={parts[1]}/>
  else if (parts[0]==='methodology') view=<Methodology/>
  else view=<Overview/>
  return <div><Header route={route}/><main id="main" className="site-main">{view}</main><footer className="site-footer"><div><b>Overview of State AI Policy and What Higher Education Can Learn from It</b><p>Research current through July 2026. Legislative status and living guidance can change.</p></div><button onClick={()=>routeTo('methodology')}>Methodology and evidence</button></footer></div>
}

export default App
