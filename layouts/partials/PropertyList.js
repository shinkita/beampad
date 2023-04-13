import config from "@config/config.json"
const PropertyList=()=>{
            return(
        <>
         <div className="container mb-pt-2" >
  <div className="row mt-0 mb-3">
    <h6>Properties (5)</h6>
  
    </div>
  </div>
  
       <div className="container flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                    Property Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                   Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                    Rental Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                    Owner Since
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                    Rental Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                   Monthly Rent
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                   your Dividends
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                   Equity
                  </th>
                </tr>
                </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {config.properties.map(property => (
                  <tr key={property.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={property.thumbnail} alt={property.propertyTitle} size={40} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {property.propertyTitle}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{property.location}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{property.rentalType}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{property.ownerSince}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{property.rentalStatus}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{property.monthlyRent}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{property.dividends}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{property.Equity}</div>
                    </td>
                    </tr>
                ))}
                    </tbody>
                </table>
                </div>
                </div>
                </div>
                </div>
           </>
    )
}
export default PropertyList;