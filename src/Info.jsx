function Info() {
    const collections = [
        {
            id: 1,
            name: "Top Restaurants",
            image: "public/newly.avif",
        },
        {
            id: 2,
            name: "Cozy Cafes",
            image: "public/trending.avif",
        },
        {
            id: 3,
            name: "Trendy Pubs",
            image: "public/gujrati.avif",
        },
        {
            id: 4,
            name: "Top Restaurants",
            image: "public/newly.avif",
        },
        {
            id: 5,
            name: "Best Bars",
            image: "public/buffets.avif",
        },
    ];

    return (
        <div className="info-section">
            <h2><b>Collections</b></h2>
            <p>
                Explore curated lists of top restaurants, cafes, pubs, and bars in Ahmedabad, 
                based on trends.
            </p>
            <div className="card-container">
                {collections.map((item) => (
                    <div className="card" key={item.id}>
                        <img src={item.image} alt={item.name} className="card-image" />
                        <div className="card-text">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Info;
