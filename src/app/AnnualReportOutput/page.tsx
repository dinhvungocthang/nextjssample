export default function AnnualReportOutput() {
    return (
        <div className="bg-white p-1">
            <div className="p-6 w-auto m-5">
                <div className="flex gap-6 mb-6">

                    <div className="p-5 basis-1/6">
                        <label htmlFor="nationality"
                               className="block text-gray-600  font-semibold mb-2">国籍</label>
                        <div className="relative">
                            <select id="nationality"
                                    className="h-7 w-full flex border border-black rounded-md focus:border-black text-gray-600">
                                <option>ロシア</option>
                                <option>ロシア</option>
                                <option>ロシア</option>
                                <option>ロシア</option>
                            </select>
                        </div>
                    </div>

                    <div className="bg-white rounded border border-black p-5 basis-1/2">
                        <h3 className="text-gray-600  font-semibold mb-4">帳票種類</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="reportType1"
                                       className="form-checkbox h-4 w-4 rounded "/>
                                <label htmlFor="reportType1"
                                       className="text-gray-600 w-50">海区別操業状況</label>
                                <input type="text" value="ロシア海区別操業状況(2025年)"
                                       className="flex-150 border border-gray-300 text-gray-600 rounded text-sm"
                                       readOnly/>
                                <span className="text-gray-600 w-6">.xlsx</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="reportType2"
                                       className="form-checkbox h-4 w-4 rounded"/>
                                <label htmlFor="reportType2"
                                       className="text-gray-600 w-50">漁船別操業状況</label>
                                <input type="text" value="ロシア漁船別操業状況(2025年)"
                                       className="flex-1  border border-gray-300 text-gray-600  rounded text-sm"
                                       readOnly/>
                                <span className="text-gray-600 w-6">.xlsx</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="reportType3"
                                       className="form-checkbox h-4 w-4 rounded"/>
                                <label htmlFor="reportType3"
                                       className="text-gray-600 w-50">漁業種類別月別操業状況</label>
                                <input type="text" value="ロシア漁業種類別月別操業状況(2025年)"
                                       className="flex-1  border border-gray-300 text-gray-600  rounded text-sm"
                                       readOnly/>
                                <span className="text-gray-600 w-6">.xlsx</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="reportType4"
                                       className="form-checkbox h-4 w-4 rounded"/>
                                <label htmlFor="reportType4" className="text-gray-600 w-50">漁船操業状況</label>
                                <input type="text" value="ロシア漁船操業状況(2025年)"
                                       className="flex-1  border border-gray-300 text-gray-600  rounded text-sm"
                                       readOnly/>
                                <span className="text-gray-600 w-6">.xlsx</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="reportType5"
                                       className="form-checkbox h-4 w-4 rounded"/>
                                <label htmlFor="reportType5"
                                       className="text-gray-600 w-50">漁船プロット図</label>
                                <input type="text" value="ロシア漁船プロット図(2025年)"
                                       className="flex-1  border border-gray-300 text-gray-600  rounded text-sm"
                                       readOnly/>
                                <span className="text-gray-600 w-6">.pdf</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="reportType6"
                                       className="form-checkbox h-4 w-4 rounded"/>
                                <label htmlFor="reportType6"
                                       className="text-gray-600 w-50">月別魚種別漁獲量集計</label>
                                <input type="text" value="ロシア月別魚種別漁獲量集計(2025年)"
                                       className="flex-1  border border-gray-300 text-gray-600  rounded text-sm"
                                       readOnly/>
                                <span className="text-gray-600 w-6">.xlsx</span>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/4">
                        <div className="flex">
                            <div className="bg-white rounded border border-black p-5 mb-5">
                                <h3 className="text-gray-600  font-semibold mb-4">報告期間</h3>
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-600 ">漁期年</span>
                                    <input type="number" value="2025"
                                           className="w-20 border border-gray-300 text-gray-600  rounded text-sm text-center "/>
                                    <span className="text-gray-600 ">年</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded border border-black p-5">
                            <h3 className="text-gray-600  font-semibold mb-4">海区別操業状況集計日付</h3>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center">
                                    <input type="radio" id="startDate" name="aggregationDate"
                                           className="form-radio h-4 w-4 border-gray-300 focus:ring-blue-500"
                                           checked/>
                                    <label htmlFor="startDate" className="ml-2 text-gray-600 ">漁獲開始日</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" id="endDate" name="aggregationDate"
                                           className="form-radio h-4 w-4 border-gray-300 focus:ring-blue-500"/>
                                    <label htmlFor="endDate" className="ml-2 text-gray-600 ">漁獲終了日</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
