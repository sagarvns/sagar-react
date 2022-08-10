import React, { useState } from 'react'
import { Layout } from './layout';
import tempdata from './tempdata.json'
import '../App.css'
import {StyledOption} from "./styles.js";

export function Option(props) {
    return (
      <StyledOption selected={props.selected}>
        {props.value}
      </StyledOption>
    );
  }

export const Similarity = () => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "353650e4-07ff-11ed-861d-0242ac120002");

    const [optionValue, setOptionValue] = useState();

    const handleSelect = (e) => {
        console.log("Selecting");
        console.log(e.target.value);
        setOptionValue(e.target.value);
    };

    const [result, setResult] = useState(null);
    const tabledisplay = () => {
        setResult(<div className='table'>
            
            <table>
            <tr >

                <th>Chembl - Id</th>
                <th>Similarity </th>
                <th>Smiles </th>
            </tr>

            {tempdata.map((item, i) => (
                <tr key={i} className="td2">
                    <td>{item.chemblId}</td>
                    <td>{item.similarity}</td>
                    <td>{item.smiles}</td>
                </tr>

            ))}
        </table>
         




        </div>);
    }


    const handleSubmission = () => {

        const formData = new FormData();

        formData.append("SMILES", optionValue);

        
        formData.append("LIBRARY", optionValue);

        fetch("https://0x6fju987f.execute-api.ap-south-1.amazonaws.com/similarity", {
            method: 'POST',
            headers: {
                "Authorization": '353650e4-07ff-11ed-861d-0242ac120002'
            },
            body: formData
        })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    };

    return (
        <Layout>
            <div >
                <label className='lab'>    SMILES    <input type="text" name="name" onChange={handleSelect} />
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                </label>
                
                <select name='LIBRARY' className="select1">
                    <Option selected value="Click to see options" />
                    
                    <Option value="Asinex"></Option>
                    <Option value="AsisChem"></Option>
                    <Option value="CHEBI"></Option>
                    <Option value="CHEMBL"></Option>
                    <Option value="CHEMBL_drug"></Option>
                    <Option value="CHEMBL_clinic"></Option>
                    <Option value="CHEMBL_act"></Option>
                    <Option value="CHEMBL_GPCR"></Option>
                    <Option value="CHEMBL_kinase"></Option>
                    <Option value="CHEMBL_protease"></Option>
                    <Option value="ChemBridge"></Option>
                    <Option value="ChemDiv"></Option>
                    <Option value="DrugBank"></Option>
                    <Option value="Enamine"></Option>
                    <Option value="Enamine_Tang"></Option>
                    <Option value="Glass"></Option>
                    <Option value="HMDB"></Option>
                    <Option value="InnovaPharm"></Option>
                    <Option value="InnovaPharm_Tang"></Option>
                    <Option value="LifeChemicals"></Option>
                    <Option value="LifeChemicals_Tang"></Option>
                    <Option value="LigandExpo"></Option>
                    <Option value="Maybridge"></Option>
                    <Option value="Otava"></Option>
                    <Option value="Otava_Tang"></Option>
                    <Option value="SPECS"></Option>
                    <Option value="TimTec"></Option>
                    <Option value="Vitas"></Option>
                    <Option value="ZINC_drug"></Option>
                    <Option value="ZINC_frag"></Option>
                    <Option value="ZINC_lead"></Option>
                </select>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <select name='METHOD' className="select1">
                    <Option selected value="Click to see options" />
                    <Option value="ECFP"></Option>
                    <Option value="FP2"></Option>
                    <Option value="MHFP6"></Option>
                    <Option value="pharmacophore"></Option>
                    <Option value="ERG"></Option>
                    <Option value="scaffold"></Option>
                    <Option value="GenScaffold"></Option>
                    <Option value="ES5D"></Option>
                    <Option value="E3FP"></Option>
                    <Option value="Combined"></Option>
                </select>

                <input type="submit" className="btn" value="Submit" onClick={tabledisplay} />

                <div>{result}</div>
            </div>
        </Layout>
    )
}