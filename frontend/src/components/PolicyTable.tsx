import { IPolicy } from "@/types/policyTypes";
import { Loader } from "@/components/loader";

interface PolicyTableProps {
  policies: IPolicy[];
  loading: boolean
}

function PolicyTable({ policies, loading }: PolicyTableProps) {
  if (loading && policies.length === 0) {
    return <div className="flex justify-center items-center h-[calc(100vh-300px)]"><Loader /></div> 
  }
  if (!loading && policies.length === 0) {
    return (
      <div className="text-center text-gray-500 p-4">
        No policies found. Try adjusting your search or filters.
      </div>
    );
  }

  return (
    <table className="w-full border-collapse">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">Policy Name</th>
          <th className="p-2 border">Type</th>
          <th className="p-2 border">Premium</th>
          <th className="p-2 border">Coverage</th>
        </tr>
      </thead>
      <tbody>
        {policies.map(policy => (
          <tr key={policy.id} className="hover:bg-gray-50">
            <td className="p-2 border">{policy.name}</td>
            <td className="p-2 border">{policy.type}</td>
            <td className="p-2 border">{policy.premium.toLocaleString()}</td>
            <td className="p-2 border">{policy.coverage.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PolicyTable;