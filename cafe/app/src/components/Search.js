import React, { useEffect, useState } from 'react'
import Fooddata from './FoodData'
import "./style.css"
import Form from 'react-bootstrap/Form'
import Cards from './Cards'
import Set from './Set'

const Search = () => {

    const [fdata, setFdata] = useState(Fooddata);
    // console.log(fdata);

    const [copydata, setCopyData] = useState([]);

    // console.log(copydata);


    const chanegData = (e) => {
        let getchangedata = e.toLowerCase();

        if (getchangedata == "") {
            setCopyData(fdata);
        } else {
            let storedata = copydata.filter((ele, k) => {
                return ele.rname.toLowerCase().match(getchangedata);
            });

            setCopyData(storedata)
        }
    }


    const cafelogo = "https://d1uxq5uu95as1y.cloudfront.net/covers/3bd8570f2d74094c_Screen-Shot-2021-03-10-at-3.08.11-PM.png"
    const mylogo=  "https://d1uxq5uu95as1y.cloudfront.net/logos/655b1a2a825e03d2_lecafelogo.png"


    useEffect(() => {

        setTimeout(() => {
            setCopyData(Fooddata);
        }, 3000);

    }, [])

    return (
        <>
            <div className="container d-flex justify-content-between align-items-center">
                <img src={cafelogo} style={{ width: "30rem", position: "relative", left: "2%", cursor: "pointer" }} alt="" />
                <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">Le Cafe.. NOW IN YOUR CITY</h2>
                <imag src={mylogo} style={{width:"10rem",position:"right",right:"2%",cursor:"pointer"}} alt=""/>
        
            </div>


            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                    <Form.Control type="text"
                        onChange={(e) => chanegData(e.target.value)}
                        placeholder="Search your favourite items..." />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{ background: "#ed4c67" }}>Submit</button>
            </Form>


            <section className='iteam_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400 }}> Select your favourite food</h2>

                <div className="row mt-2 d-flex justify-content-around align-items-center">
                    {copydata && copydata.length ? <Cards data={copydata} /> : <Set  sdata={fdata}/>}
                </div>
            </section>
            
        </>
    )
}

export default Search