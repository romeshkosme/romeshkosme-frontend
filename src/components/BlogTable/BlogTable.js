import React from "react";

function BlogTable() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center">
        <h1 className="text-lg">Blogs</h1>
        <button className="p-2 bg-blue-900 text-white ml-auto">Create New Blog</button>
      </div>
      <div className="w-full mt-2">
        <table className="border-collapse border border-blue-900 table-auto w-full">
            <thead>
                <tr>
                    <th className="border border-blue-900">No</th>
                    <th className="border border-blue-900">Title</th>
                    <th className="border border-blue-900">Status</th>
                    <th className="border border-blue-900">Author</th>
                    <th className="border border-blue-900">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-blue-900">1</td>
                    <td className="border border-blue-900">Hello World</td>
                    <td className="border border-blue-900">Draft</td>
                    <td className="border border-blue-900">Romesh Kosme</td>
                    <td className="border border-blue-900">1 August</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default BlogTable;
