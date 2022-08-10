import React from 'react'
import tempdata from './tempdata.json';
export const tabledata = () => {
    return (


        <div><table>
            <tr>
                <th>chemblId</th>
                <th>similarity</th>
                <th>smiles</th>
            </tr>
            {tempdata.map((item, i) => (
                <tr key={i}>
                    <td>{item.chemblId}</td>
                    <td>{item.similarity}</td>
                    <td>{item.smiles}</td>
                </tr>
            ))}
        </table>
        </div>

    )
}
