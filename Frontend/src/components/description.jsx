import '../components/review.css';

function Description(props) {
    return (
        <>
            <div className="w-auto mx-auto  rounded-lg mr-40 p-0">
                <h2 className="text-2xl font-semibold mb-4 flex text-start">
                    MRI scanning at Katubedda KCK Laboratories
                </h2>
                <div className="flex justify-start">
                    <p className="text-xl font-semibold text-gray-800 mb-4 w-1/2 flex justify-start">
                        LKR 16,500
                    </p>
                    <div className="mb-4 flex justify-end w-1/2">
                        <div className="flex justify-end py-2">
                            <p className="text-sm">
                                <meter
                                    className="average-rating"
                                    min="0"
                                    max="5"
                                    value={props.review}
                                    title="4.3 out of 5 stars"
                                >
                                    4.3 out of 5
                                </meter>
                                (3.7/5)
                            </p>
                        </div>
                    </div>
                </div>

                <p className="text-gray-700 mb-4 text-start ">
                    Mr. Charana Manawathilake and Mr. Lasana Subasinghe are well reputed radiologists with more than 30 years of work experience ensures you a clear, safe and efficient MRI scanning at his KCK Laborotories medical scanning centre located in Katubedda.
                </p>
                <p className="text-gray-600 mb-4">Available slots from <strong>26th March</strong></p>
                <form className="space-y-4">
                    <div className="flex">
                        <label htmlFor="date" className="block text-gray-700 text-sm mb-2 w-20 text-start mt-2">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className="w-40 p-2 border-none rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter Date"
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="time-from" className="block text-gray-700 text-sm mb-2 w-20 text-start mt-2">Time from</label>
                        <input
                            type="time"
                            id="time-from"
                            name="time-from"
                            className="w-40 p-2 border-none rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter Time"
                        />
                    </div>
                    <div className="flex ">
                        <label htmlFor="time-to" className="block text-gray-700 text-sm mb-2 w-20 text-start mt-2">To</label>
                        <input
                            type="time"
                            id="time-to"
                            name="time-to"
                            className="w-40 p-2 border-none rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter Time"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-1/2 py-2  bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Check Availability
                    </button>
                </form>
            </div>
        </>
    );
}

export default Description;