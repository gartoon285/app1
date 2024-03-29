import React from "react"
export default function RefArray(){
    const table = React.useRef()
    const tr = React.useRef([])

    const data = [
        ['Javascript', 100],
        ['React',150],
        ['React Native',180],
        ['Node.js',200],
        ['VS Code',120]
    ]
    const onClickButton = (i) =>{
        const index = tr.current[i].rowIndex
        table.current.deleteRow(index)
    }
    const onMouseOverRow = (i) =>{
        tr.current[i].style.backgroundColor = 'Yellow'
    }
    const onMouseOutRow = (i) =>{
        tr.current[i].style.backgroundColor = 'white'
    }
    const tableStyle = { margin:'auto',marginTop:30}
    return(
        <table ref={table} border='1' cellPadding={5} style={tableStyle}>
            <tr><th>Product</th><th>Price</th><th>Delete</th></tr>
            {
                data.map((item,i) => {
                    return(
                        <tr ref={a => tr.current[i]=a}
                        onMouseOver={() => onMouseOverRow(i)}
                        onMouseOut={() => onMouseOutRow(i)}
                        >
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                            <td><button onClick={() => onClickButton(i)}>
                                Delete</button></td>
                        </tr>
                    )
                })
            }
        </table>
    )
}