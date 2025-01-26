function Info() {
    const collections = [
        {
            id: 1,
            name: "Top Restaurants",
            image: "/1.jpg",
        },
        {
            id: 2,
            name: "Cozy Cafes",
            image: "/2.webp",
        },
        {
            id: 3,
            name: "Trendy Pubs",
            image: "/3.jpg",
        },
        {
            id: 4,
            name: "Top Restaurants",
            image: "/4.jpeg",
        },
        {
            id: 5,
            name: "Best Bars",
            image: "/5.webp",
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
