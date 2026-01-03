import { CertificateItem, CertificateImage } from '../types';

export const certificateData: CertificateItem[] = [
    {
        school: 'Tops Technologies',
        qualification: 'Full Stack Java Developer',
        location: 'Ahmedabad, India',
        details: [
            'Completed an intensive Full Stack Java Development course.',
            'Skills: C, C++, SQL, HTML, CSS, JavaScript, Bootstrap, jQuery, React.js, Java, JSP, Servlet, JDBC, Spring Boot, Hibernate, Microservices, RESTful API.',
            'Winner of multiple coding events and competitions.'
        ],
        meta: 'Additional Course'
    },
];

export const certificateImages: CertificateImage[] = [
    {
        id: 'cert-1',
        title: 'Certificate of Training Completion',
        image: '/assets/acmegrade-cert.jpg',
    },
];
