export async function sendMail<T>(body: T) {
  const res = await fetch('/api/send', {
    method: 'POST',
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error('Kunne ikkje sende førespurnaden')
}
