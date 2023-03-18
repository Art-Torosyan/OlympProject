import Overview from "./Overview"
import Traffic from "./Traffic"
import Csv from "./Csv"

export const TRAFFIC_PAGE = "/traffic"
export const OVERVIEW_PAGE = "/overview"
export const CSV_PAGE = "/csv"

export const route = [
    {
        id: 1, Name: 'Traffic', path: TRAFFIC_PAGE, element: <Traffic />, svg: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3 11.7V8.3H2V11.7H6.3ZM8.3 11.7H18V8.3H8.3V11.7ZM6.3 2H3C2.44772 2 2 2.44772 2 3V6.3H6.3V2ZM8.3 2V6.3H18V3C18 2.44772 17.5523 2 17 2H8.3ZM6.3 18V13.7H2V17C2 17.5523 2.44772 18 3 18H6.3ZM8.3 18H17C17.5523 18 18 17.5523 18 17V13.7H8.3V18ZM0 17V3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V17C20 18.6569 18.6569 20 17 20H3C1.34315 20 0 18.6569 0 17Z" fill="#92929D" />
        </svg>
    },
    {
        id: 1, Name: 'Overview', path: OVERVIEW_PAGE, element: <Overview />, svg: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 10H4C1.79086 10 0 11.7909 0 14V16C0 18.2091 1.79086 20 4 20H5C7.20914 20 9 18.2091 9 16V14C9 11.7909 7.20914 10 5 10ZM2 14C2 12.8954 2.89543 12 4 12H5C6.10457 12 7 12.8954 7 14V16C7 17.1046 6.10457 18 5 18H4C2.89543 18 2 17.1046 2 16V14Z" fill="#92929D" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 3.5C7 1.567 5.433 0 3.5 0C1.567 0 0 1.567 0 3.5V4.5C0 6.433 1.567 8 3.5 8C5.433 8 7 6.433 7 4.5V3.5ZM2 3.5C2 2.67157 2.67157 2 3.5 2C4.32843 2 5 2.67157 5 3.5V4.5C5 5.32843 4.32843 6 3.5 6C2.67157 6 2 5.32843 2 4.5V3.5Z" fill="#92929D" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9H15C12.7909 9 11 10.7909 11 13V16C11 18.2091 12.7909 20 15 20H16C18.2091 20 20 18.2091 20 16V13C20 10.7909 18.2091 9 16 9ZM13 13C13 11.8954 13.8954 11 15 11H16C17.1046 11 18 11.8954 18 13V16C18 17.1046 17.1046 18 16 18H15C13.8954 18 13 17.1046 13 16V13Z" fill="#92929D" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 0H12.5C10.567 0 9 1.567 9 3.5C9 5.433 10.567 7 12.5 7H16.5C18.433 7 20 5.433 20 3.5C20 1.567 18.433 0 16.5 0ZM11 3.5C11 2.67157 11.6716 2 12.5 2H16.5C17.3284 2 18 2.67157 18 3.5C18 4.32843 17.3284 5 16.5 5H12.5C11.6716 5 11 4.32843 11 3.5Z" fill="#92929D" />
        </svg>
    },
    {
        id: 1, Name: 'CSV', path: CSV_PAGE, element: <Csv />, svg: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 14V2H6V14H18ZM18 16H3C2.44772 16 2 16.4477 2 17C2 17.5523 2.44772 18 3 18H18V16ZM20 18C20 19.1046 19.1046 20 18 20H3C1.34315 20 0 18.6569 0 17V2C0 0.89543 0.89543 0 2 0H18C19.1046 0 20 0.89543 20 2V18ZM2 14.1707C2.31278 14.0602 2.64936 14 3 14H4V2H2V14.1707ZM9.48737 8.51227C8.93508 8.51227 8.48737 8.06455 8.48737 7.51227C8.48737 6.95998 8.93508 6.51227 9.48737 6.51227H12.4874C13.0397 6.51227 13.4874 6.95998 13.4874 7.51227C13.4874 8.06455 13.0397 8.51227 12.4874 8.51227H9.48737ZM9.48737 11.5123C8.93508 11.5123 8.48737 11.0646 8.48737 10.5123C8.48737 9.95998 8.93508 9.51227 9.48737 9.51227H14.4874C15.0397 9.51227 15.4874 9.95998 15.4874 10.5123C15.4874 11.0646 15.0397 11.5123 14.4874 11.5123H9.48737Z" fill="#92929D" />
        </svg>
    },
]


export const trafficData = [
    {id:1,RouteID:8074567876543,StartAddress:'Ney York City, 5th avenue, sq....', EndAddress:"This status inform" ,WorkloadIndex:12, UsageIndex:23, StartDate:"13 May 2022 - 11:20", EndDate:'13 May 2022 - 11:23'},
    {id:2,RouteID:884567876513,StartAddress:'Ney York City, 5th avenue, sq....', EndAddress:"This status inform" ,WorkloadIndex:13, UsageIndex:23, StartDate:"13 May 2022 - 11:20", EndDate:'13 May 2022 - 11:23'},
    {id:3,RouteID:384567876543,StartAddress:'Ney York City, 5th avenue, sq....', EndAddress:"This status inform" ,WorkloadIndex:14, UsageIndex:23, StartDate:"13 May 2022 - 11:20", EndDate:'13 May 2022 - 11:23'},
    {id:4,RouteID:884567876243,StartAddress:'Ney York City, 5th avenue, sq....', EndAddress:"This status inform" ,WorkloadIndex:15, UsageIndex:23, StartDate:"13 May 2022 - 11:20", EndDate:'13 May 2022 - 11:23'},
    {id:5,RouteID:884567836543,StartAddress:'Ney York City, 5th avenue, sq....', EndAddress:"This status inform" ,WorkloadIndex:16, UsageIndex:23, StartDate:"13 May 2022 - 11:20", EndDate:'13 May 2022 - 11:23'},
    {id:6,RouteID:884567776543,StartAddress:'Ney York City, 5th avenue, sq....', EndAddress:"This status inform" ,WorkloadIndex:12, UsageIndex:23, StartDate:"13 May 2022 - 11:20", EndDate:'13 May 2022 - 11:23'},
    {id:7,RouteID:885567876543,StartAddress:'Ney York City, 5th avenue, sq....', EndAddress:"This status inform" ,WorkloadIndex:122, UsageIndex:23, StartDate:"13 May 2022 - 11:20", EndDate:'13 May 2022 - 11:23'},
    {id:8,RouteID:834567876543,StartAddress:'Ney York City, 5th avenue, sq....', EndAddress:"This status inform" ,WorkloadIndex:18, UsageIndex:23, StartDate:"13 May 2022 - 11:20", EndDate:'13 May 2022 - 11:23'},
    {id:9,RouteID:884564476543,StartAddress:'Ney York City, 5th avenue, sq....', EndAddress:"This status inform" ,WorkloadIndex:62, UsageIndex:23, StartDate:"13 May 2022 - 11:20", EndDate:'13 May 2022 - 11:23'},
    {id:10,RouteID:883567876543,StartAddress:'Ney York City, 5th avenue, sq....', EndAddress:"This status inform" ,WorkloadIndex:82, UsageIndex:23, StartDate:"13 May 2022 - 11:20", EndDate:'13 May 2022 - 11:23'},
  ]