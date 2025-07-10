export default function TransferredDataDisplay() {
    return (
        <div className="bg-white p-1">
            <div className="bg-white p-6 rounded-lg shadow-md w-auto m-5 border border-black">
                <h2 className="text-lg font-semibold mb-4 text-gray-600">チェック条件</h2>

                <div className="flex gap-6 mb-6">

                    <div className="border border-black p-4 rounded-lg basis-2/5 gap-6 flex items-start">
                        <div className="grid grid-cols-1 basis-1/2">
                            <label htmlFor="country" className="text-gray-600 whitespace-nowrap">国籍</label>
                            {/*<select id="country"*/}
                            {/*        className="h-7 flex border border-black rounded-md focus:border-black text-gray-600">*/}
                            <select id="country"
                                    className="h-7 flex border rounded-md text-gray-600 border-red-500 ring-1 ring-red-500  focus:ring-red-500 focus:border-red-500 shadow-red-300">
                                <option>ロシア</option>
                                <option>ロシア1</option>
                                <option>ロシア2</option>
                            </select>
                            <p className="text-red-500 text-xs mt-1">国籍を選択してください。</p>
                        </div>
                        <div className="grid grid-cols-1 basis-1/2">
                            <div>
                                <label htmlFor="year" className="text-gray-600 whitespace-nowrap">漁獲年</label>
                                <div className="flex items-center space-x-2">
                                    <input type="text" id="year"
                                           className="h-7 w-20 border rounded-md text-center text-gray-600 focus:outline-none border-red-500 ring-1 ring-red-500  focus:ring-red-500 focus:border-red-500 shadow-red-300"/>
                                    {/*<input type="text" id="year"*/}
                                    {/*       className="h-7 w-20 border border-black rounded-md text-center focus:border-black text-gray-600"/>*/}
                                    <span className="text-gray-600">年</span>
                                </div>
                            </div>
                            <p className="text-red-500 text-xs mt-1">半角数字で入力してください</p>
                        </div>
                    </div>

                    <div className="border border-black p-4 rounded-lg basis-2/5 gap-6 flex">
                        <div className="flex items-start">
                            <label htmlFor="country" className="text-gray-600 whitespace-nowrap">日付</label>
                        </div>
                        <div>
                            <div className="flex items-center mb-4">
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
                            <div>
                                <div className="flex items-center space-x-2">
                                    <input type="date"
                                        // className="h-7 border rounded-md p-2 border-black  focus:border-black shadow-red-200"/>
                                           className="h-7 border rounded-md p-2 border-red-500 ring-1 ring-red-500  focus:ring-red-500 focus:border-red-500 shadow-red-300"/>
                                    <span className="text-gray-600">〜</span>
                                    <input type="date"
                                        // className="h-7 border rounded-md p-2 border-black  focus:border-black"/>
                                           className="h-7 border rounded-md p-2 border-red-500 ring-1 ring-red-500  focus:ring-red-500 focus:border-red-500 shadow-red-300"/>
                                </div>
                                <p className="text-red-500 text-xs mt-1">終了日は開始日より後に設定してください。</p>
                            </div>
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
                                            className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                            許可番号
                                        </th>
                                        <th scope="col"
                                            className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                            名称
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">1-1 M-72</td>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">ピュートル1号</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">1-1 M-31</td>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">マイロニス</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">1-1 M-38</td>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">ソリダルノシチ</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">1-1 M-38</td>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">ソリダルノシチ</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">1-1 M-38</td>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">ソリダルノシチ</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">1-1 M-38</td>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">ソリダルノシチ</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">1-1 M-38</td>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">ソリダルノシチ</td>
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
                                <div
                                    className="w-10 h-6 bg-yellow-300 rounded-md flex items-center justify-center"></div>
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
            <div className="bg-white p-6 rounded-lg shadow-md w-auto m-5 border border-black">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold mb-4 text-gray-600">消化漁獲量</h2>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                        出力
                    </button>
                </div>

                <div className="flex justify-end items-center mt-4 text-gray-600">
                    <span>1 ∼ 6 件/全 100 件</span>
                </div>

                <div className="overflow-x-auto border border-gray-200 rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                        <thead className="bg-gray-50 border border-gray-200">
                        <tr className="items-center">
                            <th scope="col"
                                className="table-cell-padding text-left text-gray-600 p-2 border-r border-gray-200">
                                種別
                            </th>
                            <th scope="col"
                                className="table-cell-padding text-left text-gray-600 p-2 border-r border-gray-200">
                                魚種x
                            </th>
                            <th scope="col"
                                className="table-cell-padding text-left text-gray-600 p-2 border-r border-gray-200">
                                形態x
                            </th>
                            <th scope="col"
                                className="table-cell-padding text-left text-gray-600 p-2 border-r border-gray-200">
                                転載日付
                            </th>
                            <th scope="col"
                                className="table-cell-padding text-left text-gray-600 p-2 border-r border-gray-200">
                                経度
                            </th>
                            <th scope="col"
                                className="table-cell-padding text-left text-gray-600 p-2 border-r border-gray-200">
                                緯度
                            </th>
                            <th scope="col" colSpan={2}
                                className="table-cell-padding text-left text-gray-600 p-2 border-b border-r border-gray-200">
                                相手船
                            </th>
                            <th scope="col"
                                className="table-cell-padding text-left text-gray-600 p-2 border-r border-gray-200">
                                転載量
                            </th>
                            <th scope="col"
                                className="table-cell-padding text-left text-gray-600 p-2 border-r border-gray-200">
                                累計転載量
                            </th>
                        </tr>
                        <tr>
                            <th scope="col"
                                className="table-cell-padding text-left text-gray-600 border-r border-gray-200"></th>
                            <th scope="col"
                                className="table-cell-padding text-left text-gray-600 border-r border-gray-200"></th>
                            <th scope="col"
                                className="table-cell-padding text-left text-gray-600 border-r border-gray-200"></th>
                            <th scope="col"
                                className="table-cell-padding text-left text-gray-600 border-r border-gray-200"></th>
                            <th scope="col"
                                className="table-cell-padding text-left text-gray-600 border-r border-gray-200"></th>
                            <th scope="col"
                                className="table-cell-padding text-left text-gray-600 border-r border-gray-200"></th>
                            <th scope="col"
                                className="table-cell-padding text-left text-gray-600 p-2 border-r border-t border-gray-200">
                                許可番号
                            </th>
                            <th scope="col"
                                className="table-cell-padding text-left text-gray-600 p-2 border-r border-t border-gray-200">
                                船名
                            </th>
                            <th scope="col"
                                className="table-cell-padding text-left text-gray-600 border-r border-gray-200"></th>
                            <th scope="col"
                                className="table-cell-padding text-left text-gray-600 border-r border-gray-200"></th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">転載船
                            </td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">マサバ
                            </td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">ラウンド
                            </td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">2/10/2022</td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">37°
                                45' 00"
                            </td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">141°
                                17' 00"
                            </td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">1-4-43</td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-right text-gray-600 border-r border-gray-200 p-2">クリスタルユーアジア<br/>CRYSTAL
                                ASIA
                            </td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-right text-gray-600 border-r border-gray-200 p-2">945.58<br/>(945.57)
                            </td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-right text-gray-600 border-r border-gray-200 p-2">945.58</td>
                        </tr>
                        <tr>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">2/10/2022</td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">37°
                                45' 00"
                            </td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">141°
                                18' 00"
                            </td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">1-4-7</td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-right text-gray-600 border-r border-gray-200 p-2">クリスタルユーアジア<br/>CRYSTAL
                                ASIA
                            </td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-right text-gray-600 border-r border-gray-200 p-2">1557.80<br/>(1557.90)
                            </td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-right text-gray-600 border-r border-gray-200 p-2">4395.18</td>
                        </tr>
                        <tr>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">2/10/2022</td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">↑</td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">141°
                                18' 00"
                            </td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">1-4-7</td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-right text-gray-600 border-r border-gray-200 p-2">クリスタルユーアジア<br/>CRYSTAL
                                ASIA
                            </td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-right text-gray-600 border-r border-gray-200 p-2">6,240.46</td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-right text-gray-600 border-r border-gray-200 p-2">6,240.46</td>
                        </tr>
                        <tr>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">2/26/2022</td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">↑</td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">141°
                                18' 00"
                            </td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">1-4-7</td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-right text-gray-600 border-r border-gray-200 p-2">クリスタルユーアジア<br/>CRYSTAL
                                ASIA
                            </td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-right text-gray-600 border-r border-gray-200 p-2">6,240.46</td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-right text-gray-600 border-r border-gray-200 p-2">6,240.46</td>
                        </tr>
                        <tr>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">141°
                                18' 00"
                            </td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">1-4-7</td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-right text-gray-600 border-r border-gray-200 p-2">小計
                            </td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-right text-gray-600 border-r border-gray-200 p-2">6,240.46</td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-right text-gray-600 border-r border-gray-200 p-2">6,240.46</td>
                        </tr>
                        <tr>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2"></td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">141°
                                18' 00"
                            </td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-gray-600 border-r border-gray-200 p-2">1-4-7</td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-right text-gray-600 border-r border-gray-200 p-2">漁獲計</td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-right text-gray-600 border-r border-gray-200 p-2">6,240.46</td>
                            <td className="table-cell-padding whitespace-nowrap text-sm text-right text-gray-600 border-r border-gray-200 p-2">6,240.46</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end items-center mt-4 text-sm text-gray-600">
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <a href="#"
                           className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-600 hover:bg-gray-50">
                            <span className="sr-only">Previous</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                 fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M9.707 4.293a1 1 0 010 1.414L6.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0zM14.707 4.293a1 1 0 010 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                      clipRule="evenodd"/>
                            </svg>

                        </a>
                        <a href="#"
                           className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-600 hover:bg-gray-50">
                            <span className="sr-only">Previous</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                 fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                      clipRule="evenodd"/>
                            </svg>

                        </a>
                        <a href="#" aria-current="page"
                           className="z-10 bg-blue-50 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                            1
                        </a>
                        <a href="#"
                           className="bg-white border-gray-300 text-gray-600 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                            2
                        </a>
                        <a href="#"
                           className="bg-white border-gray-300 text-gray-600 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                            9
                        </a>
                        <span
                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-600">
                    ...
                </span>
                        <a href="#"
                           className="bg-white border-gray-300 text-gray-600 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                            10
                        </a>
                        <a href="#"
                           className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-600 hover:bg-gray-50">
                            <span className="sr-only">Next</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                 fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clipRule="evenodd"/>
                            </svg>
                        </a>
                        <a href="#"
                           className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-600 hover:bg-gray-50">
                            <span className="sr-only">Last</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                 fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M10.293 15.707a1 1 0 010-1.414L13.586 10l-3.293-3.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0zM5.293 15.707a1 1 0 010-1.414L8.586 10l-3.293-3.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clipRule="evenodd"/>
                            </svg>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}
