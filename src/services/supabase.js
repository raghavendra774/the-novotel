
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://oywycauuipbewgmcgadz.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95d3ljYXV1aXBiZXdnbWNnYWR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0NTYxNjcsImV4cCI6MjA0MzAzMjE2N30.Q2d6t5HXte5wlGsGYXVps1QQ9yMpLfhrw_DMPM00TAQ"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;