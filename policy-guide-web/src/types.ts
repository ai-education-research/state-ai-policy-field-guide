export type Posture = 'mandate' | 'guidance' | 'pending' | 'absent'

export interface SourceDocument {
  filename: string
  title: string
  issuer: string
  date: string
  type: string
}

export type ProvenanceStatus = 'read' | 'downloaded' | 'none'

export interface Provenance {
  status: ProvenanceStatus
  documents: string[]
  checkedOn: string | null
  note: string | null
}

export interface ExposureItem {
  kind: 'stat' | 'practice' | 'voice' | 'artifact' | 'lived'
  fact: string
  source: string
  quote?: boolean
  featured?: boolean
  caveat?: string
}

export interface ShortVersionItem {
  lead: string
  text: string
}

export interface StateProfile {
  name: string
  abbreviation: string
  posture: Posture
  authority: string
  provenance: Provenance
  summary: string
  graduateProfile: string[]
  exposure: ExposureItem[]
  shortVersion: ShortVersionItem[]
  instrument: string
  detector: string
  offloading: string
  higherEdHook: string
  tags: string[]
  documents: SourceDocument[]
  sourceUrls: string[]
  sections: Record<string, string>
}

export interface Framework {
  id: string
  number: number
  title: string
  body: string
  summary: string
  states: string[]
}

export interface InstrumentLevel {
  n: string
  label: string
  permits: string
  disclose: string
}

export interface Instrument {
  id: string
  state: string
  name: string
  agency: string
  source: string
  url: string
  attribution: string
  verified: 'primary' | 'tracker' | 'unverified'
  verifiedOn: string
  levels: InstrumentLevel[]
}

export type TopicKey = 'permission' | 'disclosure' | 'parity' | 'floor' | 'detector' | 'appeal'

export interface ExposurePoint {
  id: string
  topic: TopicKey
  field: 'instrument' | 'detector' | 'offloading' | null
  owner: 'faculty' | 'institution'
  title: string
  taught: string
  says: string
  fails: string
  position: string
  evidence: string
  chips: string[]
  objection: { draft: boolean; q: string; a: string[] }
}

export interface Exposure {
  headline: string
  headlineEm: string
  preshow: string[]
  noHook: string
  points: ExposurePoint[]
}

export interface SiteContent {
  generatedAt: string
  states: StateProfile[]
  frameworks: Framework[]
  instruments: Instrument[]
  exposure: Exposure
  featuredFrameworks: string
  overview: Record<string, string>
  readiness: Record<string, string>
}
