import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://gteipjszrtnvkabqhaiq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_b--KdjVuDCBIeuUf38oXhA_2jFUyjaB";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
