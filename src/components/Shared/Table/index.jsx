import "./styles.scss";
export default function Table({ head, data }) {
  return (
    <table>
      <thead>
        <tr>
          {head?.map((item, idx) => (
            <th key={idx} style={{ width: item?.width }}>
              {item?.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((datum, idx) => (
          <tr key={idx}>
            {head?.map((label, idj) => (
              <td
                key={idj}
                style={{
                  textAlign: datum[label?.value] ? label?.textAlign : "center",
                  fontWeight: label?.weight,
                  maxWidth: label?.width,
                  color: label?.color,
                }}
              >
                {!datum[label?.value]
                  ? "-"
                  : label?.format
                  ? label?.format(datum[label?.value])
                  : datum[label?.value]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
