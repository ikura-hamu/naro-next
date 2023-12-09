export default async function Ping() {
  const res = await fetch('http://localhost:8080/ping', {
    method: 'GET',
  })
  const text = await res.headers.get('content-type') === 'application/json' ? await res.json() : await res.text()

  return (
    <>
      {text}
    </>
  )
}