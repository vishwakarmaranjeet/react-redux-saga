import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as actionCreator from "../redux/actions";

const EmployeeList = () => {
    const dispatch = useDispatch();
    const [employeeList, setEmployeeList] = useState(null);
    useEffect(() => {
        dispatch(actionCreator.getEmployeesList((data) => {
            if (data?.success) {
                setEmployeeList(data?.data);
            } else {
                console.log(data?.error);
            }
        }));
    }, [dispatch]);
    console.log("EMPLOYEE", employeeList);
    return <>
        <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Employee List</h5>
                {/* <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    View all
                </a> */}
        </div>
        <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                    {employeeList?.map((data)=> {
                        return <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="w-12 h-12 rounded-full" src={data?.avatar} alt={data?.first_name} />
                            </div>
                            <div class="flex-1 min-w-0 ms-4 ml-5">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    {data?.first_name}
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {data?.email}
                                </p>
                            </div>
                            {/* <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $320
                            </div> */}
                        </div>
                    </li>
                    })}
                    
                </ul>
        </div>
        </div>
    </>
};
export default EmployeeList;