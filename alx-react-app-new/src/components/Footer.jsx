// src/components/Footer.jsx
function Footer() {
    return (
        <footer style={{
            backgroundColor: '#2c3e50', 
            color: 'white', 
            textAlign: 'center', 
            padding: '15px', 
            position: 'relative', 
            bottom: '0', 
            width: '100%', 
            boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)'
        }}>
            <p style={{
                margin: '0', 
                fontSize: '14px', 
                color: '#bdc3c7'
            }}>
                © 2023 City Lovers
            </p>
        </footer>
    );
}

export default Footer;
