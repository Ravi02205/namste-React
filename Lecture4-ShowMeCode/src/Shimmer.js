const Shimmer = function () {
    return (
        <>
            {
                Array(15).fill('').map((item, index) => {
                    return (
                        <div className="shimmer-card" key={index}>
                            <div className="shimmer-Img" />
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