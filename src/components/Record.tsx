export default function Record() {
  const records = [
    { year: 2024, event: "State Open", result: "T3" },
    { year: 2023, event: "Coastal Classic", result: "1st" },
    { year: 2022, event: "River Cup", result: "2nd" }
  ];

  return (
    <div id="record" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold">Competitive Record</h2>
      <p className="mt-3 text-gray-600">
        Luke has competed at state and regional tournaments, consistently posting top results and
        bringing real-world competitive insights into his coaching.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-3 border-b">Year</th>
              <th className="py-2 px-3 border-b">Event</th>
              <th className="py-2 px-3 border-b">Result</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r) => (
              <tr key={r.event} className="odd:bg-white even:bg-slate-50">
                <td className="py-2 px-3">{r.year}</td>
                <td className="py-2 px-3">{r.event}</td>
                <td className="py-2 px-3">{r.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
