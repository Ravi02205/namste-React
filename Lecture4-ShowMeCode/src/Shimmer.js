const Shimmer = function () {
    return (
        <>
            {
                Array(15).fill('').map((item, index) => {
                    return (
                        <div className="shimmer-card w-1/5 h-[10%] p-5 max-w-[280px] p-2 m-2" key={index}>
                            <div className="w-11/12 h-52 mb-2 shimmer-Img"/>
                            <div className="shimmer-line" />
                            <div className="shimmer-line-small" />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Shimmer;