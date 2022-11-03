import React from 'react'

export default function AxiosFetch() {
  return (
    <>
    <div><b>AxiosFetch Differences:</b></div>
    <table border="1px">
        <tr>
            <th>AXIOS</th>
            <th>FETCH</th>
        </tr>
        <tr>
            <td>Axios has url in request object.</td>
            <td>Fetch has no url in request object.</td>
        </tr>
        <tr>
            <td>Axios is a stand-alone third party package that can be easily installed</td>
            <td>Fetch is built into most modern browsers; no installation is required as such.</td>
        </tr>
        <tr>
            <td>Axios enjoys built-in XSRF protection.</td>
            <td>Fetch does not.</td>
        </tr>
        <tr>
            <td>Axios uses the data property.</td>
            <td>Fetch uses the body property.</td>
        </tr>
        <tr>
            <td>Axios’ data contains the object.</td>
            <td>Fetch’s body has to be stringified.</td>
        </tr>
        <tr>
            <td>Axios performs automatic transforms of JSON data.</td>
            <td>Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response.</td>

        </tr>
        <tr>
            <td>Axios allows cancelling request and request timeout.</td>
            <td>Fetch does not.</td>
        </tr>
        <tr>
            <td>Axios has wide browser support.</td>
            <td>Fetch only supports Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+ (This is known as Backward Compatibility).</td>
        </tr>
        <tr>
            <td>Axios “GET” call can have body Content</td>
            <td>Fetch “GET” call cannot have body Content</td>
        </tr>
    </table>
    </>
  )
}