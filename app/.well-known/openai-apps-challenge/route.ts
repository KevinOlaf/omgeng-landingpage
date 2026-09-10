// OpenAI plugin domain verification: the portal fetches this URL and expects the body to be
// exactly the challenge token it issued (text/plain, nothing else). budget-note.com is the
// parent origin of mcp.budget-note.com, which the portal accepts as the challenge base.
// Set OPENAI_APPS_CHALLENGE in Vercel → Settings → Environment Variables, then redeploy.
export const dynamic = "force-dynamic";

export function GET() {
  const token = process.env.OPENAI_APPS_CHALLENGE?.trim();
  if (!token) return new Response("Not Found", { status: 404 });
  return new Response(token, { status: 200, headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" } });
}
