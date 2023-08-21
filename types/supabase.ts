export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      journal: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          image: string | null
          technologies: Json[] | null
          title: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          image?: string | null
          technologies?: Json[] | null
          title?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          image?: string | null
          technologies?: Json[] | null
          title?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
