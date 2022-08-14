#DOCUMENTATION

LINK FOR BACKEND: "https://technomart-portfolio.herokuapp.com/"

PRODUCT MODEL:

[
    {
        "id": 3,
        "img": "https://www.crucial.com/content/dam/crucial/marketing-assets/images/web/scanner-selector-hero/crucial-selector-homepage-hero-carousel-desktop-memory.psd.transform/small-png/img.png",
        "label": "computer 2",
        "guarantee": "1 year",
        "started_date": "2020",
        "using_date": "Not limited",
        "company_name": "Asus"
    },
    {
        "id": 4,
        "img": "https://www.crucial.com/content/dam/crucial/marketing-assets/images/web/scanner-selector-hero/crucial-selector-homepage-hero-carousel-desktop-memory.psd.transform/small-png/img.png",
        "label": "computer 3",
        "guarantee": "1 year",
        "started_date": "2020",
        "using_date": "Not limited",
        "company_name": "Asus"
    }
]

1.  
    Endpoint: "/product/all",
    Method: "GET",
    Description: "Hamma productlarni olish",
    Response:
    [
        {
            "id": 3,
            "img": "https://www.crucial.com/content/dam/crucial/marketing-assets/images/web/scanner-selector-hero/crucial-selector-homepage-hero-carousel-desktop-memory.psd.transform/small-png/img.png",
            "label": "computer 2",
            "guarantee": "1 year",
            "started_date": "2020",
            "using_date": "Not limited",
            "company_name": "Asus"
        },
        {
            "id": 4,
            "img": "https://www.crucial.com/content/dam/crucial/marketing-assets/images/web/scanner-selector-hero/crucial-selector-homepage-hero-carousel-desktop-memory.psd.transform/small-png/img.png",
            "label": "computer 3",
            "guarantee": "1 year",
            "started_date": "2020",
            "using_date": "Not limited",
            "company_name": "Asus"
        }
    ]
2.  
    Endpoint: "/product/add",
    Method: "POST",
    Description: "Yangi product qo'shish",
    Request:
        }
            "img": "https://www.crucial.com/content/dam/crucial/marketing-assets/images/web/scanner-selector-hero/crucial-selector-homepage-hero-carousel-desktop-memory.psd.transform/small-png/img.png",
            "label": "computer 2",
            "guarantee": "1 year",
            "started_date": "2020",
            "using_date": "Not limited",
            "company_name": "Asus"
        }
    Response:
        StatusCode: 201
3.  
    Endpoint: "/product/edit/:id" => "/product/edit/1,2,3,4,5...",
    Method: "PUT",
    Description: "Product ni edit qilish",
    Request:
        }
            "img": "https://www.crucial.com/content/dam/crucial/marketing-assets/images/web/scanner-selector-hero/crucial-selector-homepage-hero-carousel-desktop-memory.psd.transform/small-png/img.png",
            "label": "computer 2 edited",
            "guarantee": "1 year edited",
            "started_date": "2020 edited",
            "using_date": "Not limited edited",
            "company_name": "Asus edited"
        }
    Response:
        StatusCode: 200
4.  
    Endpoint: "/product/delete/:id" => "/product/delete/1,2,3,4,5...",
    Method: "DELETE",
    Description: "Product ni o'chirish",
    Response:
        StatusCode: 200
