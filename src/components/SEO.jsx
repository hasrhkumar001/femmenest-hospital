import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
    title = "FemmeNest Hospital | Best Maternity & Gynaecology in Delhi", 
    description = "FemmeNest Hospital offers luxury boutique maternity care, safe C-sections, advanced NICU, and expert gynaecology services in Karkardooma, Delhi.",
    name = "FemmeNest Hospital",
    type = "Hospital"
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={name} />
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            { /* JSON-LD Schema Markup */ }
            <script type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org",
                    "@type": "${type}",
                    "name": "${name}",
                    "image": "https://www.femmenest.com/logo.png",
                    "@id": "",
                    "url": "https://www.femmenest.com",
                    "telephone": "09218072466",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "A-16, Karkardooma",
                        "addressLocality": "Delhi",
                        "postalCode": "110092",
                        "addressCountry": "IN"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 28.6500,
                        "longitude": 77.3000
                    },
                    "medicalSpecialty": [
                        "Obstetric",
                        "Gynecologic"
                    ]
                }
                `}
            </script>
        </Helmet>
    );
};

export default SEO;
