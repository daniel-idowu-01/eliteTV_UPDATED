import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://klygutkvjrmcuydbioxa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtseWd1dGt2anJtY3V5ZGJpb3hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1Mjk3NDgsImV4cCI6MjAxMDEwNTc0OH0.0jRvDeWsKmpeW3sY9soMfJbT2AyVC-KciNPB5gywKbU'
export const supabase = createClient(supabaseUrl, supabaseKey)