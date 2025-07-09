export default function TransferredDataDisplay() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-auto m-5">
            <h2 className="text-lg font-semibold mb-4 text-gray-600">チェック条件</h2>

            <div className="flex gap-6 mb-6">

                <div className="border border-black p-4 rounded-lg basis-2/5 gap-6 flex items-center">
                    <div className="grid grid-cols-1 basis-1/2">
                        <label htmlFor="country" className="text-gray-600 whitespace-nowrap">国籍</label>
                        <select id="country"
                                className="flex-grow border border-black rounded-md focus:border-black text-gray-600">
                            <option>ロシア</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 basis-1/4">
                        <label htmlFor="year" className="text-gray-600 whitespace-nowrap">漁獲年</label>
                        <div className="flex items-center space-x-2">
                            <input type="text" id="year"
                                   className="w-20 border border-black rounded-md text-center focus:border-black"/>
                            <span className="text-gray-600">年</span>
                        </div>
                    </div>
                </div>

                <div className="border border-black p-4 rounded-lg basis-2/5 gap-6">
                    <div className="flex items-center space-x-4 mb-4">
                        <label htmlFor="country" className="text-gray-600 whitespace-nowrap">日付</label>
                        <label className="inline-flex items-center">
                            <input type="radio" name="date_type" value="work_date"
                                   className="form-radio text-blue-600 rounded-full"/>
                            <span
                                className="ml-2 text-gray-600 whitespace-nowrap">操業日</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="radio" name="date_type" value="data_sent_date"
                                   className="form-radio text-blue-600 rounded-full"/>
                            <span
                                className="ml-2 text-gray-600 whitespace-nowrap">データ送信日</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="radio" name="date_type" value="data_registered_date"
                                   className="form-radio text-blue-600 rounded-full"/>
                            <span
                                className="ml-2 text-gray-600 whitespace-nowrap">データ登録日</span>
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="date"
                               className="border border-black rounded-md p-2 focus:border-black"/>
                        <span className="text-gray-600">〜</span>
                        <input type="date"
                               className="border border-black rounded-md p-2 focus:border-black"/>
                    </div>
                </div>
            </div>

            <div className="flex gap-6 mb-6">
                <div className="border border-black p-4 rounded-lg basis-2/5 gap-6">
                    <h3 className="font-medium mb-3 text-gray-600">対象許可船</h3>
                    <div className="flex">
                        <div className="inline-flex space-x-4 basis-1/2">
                            <label>
                                <input type="radio" name="ship_target" value="specified"
                                       className="form-radio text-blue-600 rounded-full"/>
                                <span
                                    className="ml-2 text-gray-600 whitespace-nowrap">対象船指定</span>
                            </label>
                            <label>
                                <input type="radio" name="ship_target" value="all"
                                       className="form-radio text-blue-600 rounded-full"/>
                                <span className="ml-2 text-gray-600 whitespace-nowrap">全船</span>
                            </label>
                        </div>
                        <div className="basis-1/2 overflow-y-auto border border-black rounded-md max-h-40">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        許可番号
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        名称
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">1-1 M-72</td>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">ピュートル1号</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">1-1 M-31</td>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">マイロニス</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">1-1 M-38</td>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">ソリダルノシチ</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">1-1 M-38</td>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">ソリダルノシチ</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">1-1 M-38</td>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">ソリダルノシチ</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">1-1 M-38</td>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">ソリダルノシチ</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">1-1 M-38</td>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">ソリダルノシチ</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="border border-black p-4 rounded-lg gap-6">
                    <h3 className="font-medium mb-3 text-gray-600">出力対象</h3>
                    <div className="space-y-2">
                        <label className="flex">
                            <input type="checkbox" className="form-checkboxrounded"/>
                            <span
                                className="ml-2 text-gray-600 whitespace-nowrap">転載量</span>
                        </label>
                        <label className="flex">
                            <input type="checkbox" className="form-checkboxrounded"/>
                            <span className="ml-2 text-gray-600 whitespace-nowrap">相手船のみ</span>
                        </label>
                        <label className="flex">
                            <input type="checkbox" className="form-checkboxrounded"/>
                            <span
                                className="ml-2 text-gray-600 whitespace-nowrap">累計のみ</span>
                        </label>
                    </div>
                </div>

                <div className="border border-black p-4 rounded-lg gap-6">
                    <h3 className="font-medium mb-3 text-gray-600">転載量警告範囲</h3>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-6 bg-yellow-300 rounded-md flex items-center justify-center"></div>
                            <input type="text"
                                   className="w-16 border border-gray-300 rounded-md p-1 text-center"/>
                            <span className="text-gray-600">%</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-6 bg-red-500 rounded-md flex items-center justify-center"></div>
                            <input type="text"
                                   className="w-16 border border-gray-300 rounded-md p-1 text-center"/>
                            <span className="text-gray-600">%</span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end  mb-6">
                    <label>
                        <input type="checkbox" className="form-checkbox text-blue-600 rounded"/>
                        <span className="ml-2 text-gray-600 whitespace-nowrap">同上表示</span>
                    </label>
                </div>
            </div>

            <div className="flex justify-end">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                    チェック
                </button>
            </div>
        </div>
    )
}
