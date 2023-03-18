import { Table } from "@mui/material";
import React, { useState } from "react";
import "./components.scss"
import { trafficData } from "./urls";
import { useSearchParams } from "react-router-dom"


export default function Traffic() {

    const [open, setOpen] = useState(false)

    return <div className="Traffic">
        <div className="TrafficBox" onClick={() => setOpen(!open)}>
            <h1>
                Routes list
            </h1>
            <div className="Filter">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.831812 3.84339C-0.0414245 2.54891 0.90505 0.833344 2.45418 0.833344L11.546 0.833344C13.0951 0.833344 14.0416 2.54891 13.1683 3.84339C13.1628 3.8516 13.157 3.85964 13.151 3.8675L9.34598 8.84301C9.08862 9.22948 8.95174 9.68148 8.95174 10.1432V12.5133C8.95174 12.8381 8.82114 13.1483 8.59061 13.3761L7.13893 14.8108C6.37461 15.5661 5.0484 15.0433 5.0484 13.9479V10.1432C5.0484 9.68148 4.91151 9.22948 4.65415 8.84301L0.849145 3.8675C0.84313 3.85964 0.837349 3.85159 0.831812 3.84339ZM1.65344 3.27304L5.45795 8.2479C5.46397 8.25577 5.46975 8.26381 5.47528 8.27202C5.84874 8.82563 6.0484 9.47672 6.0484 10.1432V13.9479C6.0484 14.1307 6.28583 14.2479 6.43601 14.0995L7.88769 12.6649C7.9294 12.6237 7.95174 12.569 7.95174 12.5133V10.1432C7.95174 9.47672 8.1514 8.82563 8.52485 8.27202C8.53039 8.26381 8.53617 8.25577 8.54218 8.2479L12.3467 3.27304C12.7471 2.66175 12.3111 1.83334 11.546 1.83334L2.45418 1.83334C1.68907 1.83334 1.25305 2.66176 1.65344 3.27304Z" fill="#28303F" />
                </svg>
                <p>
                    Filter
                </p>
                <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.276271 0.354327C0.448776 0.138696 0.763422 0.103736 0.979053 0.27624L4.00004 2.69303L7.02102 0.27624C7.23666 0.103736 7.5513 0.138696 7.72381 0.354327C7.89631 0.569958 7.86135 0.884605 7.64572 1.05711L4.31239 3.72378C4.12978 3.86986 3.8703 3.86986 3.68769 3.72378L0.354358 1.05711C0.138727 0.884605 0.103766 0.569958 0.276271 0.354327Z" fill="#28303F" />
                </svg>

            </div>

        </div>

        {
            open && <div className="inputBox">
                <div>
                    <select placeholder="Start address">
                        <option>

                        </option>

                    </select>
                    <select placeholder="End address">
                        <option>

                        </option>

                    </select>
                    <input type="text" placeholder="Work load index from 22" />
                    <input type="text" placeholder="Work load index to 100" />
                </div>
                <div>
                    <div>
                    <input type="text" placeholder="Work load index from 22" />
                    <input type="text" placeholder="Work load index to 100" />
                    </div>
                    <div style={{
                        display:"flex",
                        justifyContent:'right',
                        paddingRight:'20px'
                        
                    }}>
                        <button style={{
                            border:'none',
                            
                        }} onClick={()=>setOpen(false)}>Cancel</button>
                        <button>Filter</button>
                    </div>
                </div>
            </div>
        }
        <div className="Traffic_Data">

            <Table>
                <tr style={{
                    paddingRight: '100px'
                }}>
                    <th></th>
                    <th>Route ID</th>
                    <th>Start address</th>
                    <th>End address</th>
                    <th>Workload index</th>
                    <th>Usage index</th>
                    <th>Start date</th>
                    <th>End date</th>
                </tr>
                {
                    trafficData.map(({ id, RouteID, StartAddress, EndAddress, WorkloadIndex, UsageIndex, StartDate, EndDate }) => {
                        return <tr key={id}>
                            <td style={{
                                width: "50px"
                            }}>{id}</td>
                            <td>{RouteID}</td>
                            <td>{StartAddress}</td>
                            <td>{EndAddress}</td>
                            <td>{WorkloadIndex}</td>
                            <td>{UsageIndex}</td>
                            <td>{StartDate}</td>
                            <td>{EndDate}</td>
                        </tr>
                    })
                }
            </Table>
        </div>
    </div>
}