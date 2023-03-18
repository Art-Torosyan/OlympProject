import { Table } from "@mui/material";
import React from "react";
import "./components.scss"
import { trafficData } from "./urls";


export default function Cvs() {
    return <div className="Traffic">
        <div className="TrafficBox">
            <h1>
               CVS
            </h1>
            
        </div>
        <div className="Traffic_Data">


            <Table>
                <tr style={{
                    paddingRight:'100px'
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
                    trafficData.map(({id,RouteID,StartAddress, EndAddress,WorkloadIndex, UsageIndex, StartDate, EndDate})=>{
                        return <tr key={id}>
                            <td style={{
                                width:"50px"
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