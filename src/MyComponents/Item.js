import React from 'react'

export const Item = ({result, onItemClick}) => {
  return (
    <table className="table text-white mb-0 fixed-width-columns">
                    
                    <tbody>
                      <tr className="align-middle">
                        <td>
                          <span className="ms-2">{result.episode_id}</span>
                        </td>
                        <td className="align-middle">
                          <span>{result.title}</span>
                        </td>
                        <td className="align-middle">
                          <span>{result.release_date}</span>
                        </td>
                        <td className="align-middle" >
                            <button type="submit" className="btn btn-info" onClick={()=>{onItemClick(result)}}>Explore</button>
                        </td>
                      </tr>
                    </tbody>
    </table>
  )
}
