import React, { useState } from 'react'
import Layout from '../components/Layout'
import TopNav from '../components/TopNav'
import { Link } from 'react-router-dom'
import { MemberModal } from '../components/MemberModal'

const Members = () => {
  const [memberAdd, setMemberAdd] = useState(false)

  return (
    <Layout>
      <div className="bg-stone block pb-20">
        <div className="gap-5  max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch ml- max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
              <TopNav heading="Members" />

              <div className=''>
                <div className='flex w-full items-center justify-between my-10'>
                  <div className='px-4'>
                    <select className='border-0 bg-transparent text-white rounded-md focus:outline-0 w-24'>
                      <option disabled>Sort By</option>
                      <option>Salary</option>
                      <option>Date</option>
                      <option>Time</option>
                      <option>Position</option>
                    </select>
                  </div>

                  <div className='absolute px-4 md:px-0 md:relative bottom-32 md:bottom-0 flex space-x-4 justify-center md:justify-end w-full'>
                    <Link to="/attendance"
                      className="text-emerald-300 border border-emerald-300 hover:cursor-pointer items-stretch justify-center flex w-60 max-w-full gap-2 mt-2 py-3.5 rounded-lg"
                    >
                      <div className="text-base font-medium leading-6 tracking-normal grow whitespace-nowrap text-center">
                        View Attendance
                      </div>
                    </Link>
                    <button
                      onClick={() => setMemberAdd(true)}
                      className="bg-emerald-300 hover:cursor-pointer items-stretch self-center flex w-60 max-w-full gap-2 mt-2 py-3.5 text-black rounded-lg"
                    >
                      <div className="text-base font-medium leading-6 tracking-normal grow whitespace-nowrap">
                        Add Member
                      </div>
                    </button>
                  </div>
                </div>



                <div className="px-4 relative overflow-x-auto sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="co" className="px-6 py-3">
                          Name
                        </th>
                        <th scope="co" className="px-6 py-3 hidden md:inline-block">
                          Email
                        </th>
                        <th scope="co" className="px-6 py-3 hidden md:inline-block">
                          Wallet Address
                        </th>
                        <th scope="co" className="px-6 py-3 hidden md:inline-block">
                          Position
                        </th>
                        <th scope="co" className="px-6 py-3">
                          Salary
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="ro" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Adebisi
                        </td>
                        <td className="px-6 py-4 hidden md:inline-block">
                          vince@gmail.com
                        </td>
                        <td className="px-6 py-4 hidden md:inline-block">
                          HS9NNS77383GHJ
                        </td>
                        <td className="px-6 py-4 hidden md:inline-block">
                          UI Engineer
                        </td>
                        <td className="px-6 py-4">
                          $876
                        </td>
                      </tr>
                    </tbody>
                  </table>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Payment Modal */}
      {memberAdd &&
        <MemberModal setMemberAdd={setMemberAdd} memberAdd={memberAdd} />
      }
    </Layout>
  )
}

export default Members