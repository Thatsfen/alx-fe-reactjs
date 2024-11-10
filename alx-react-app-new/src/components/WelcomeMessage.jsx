// src/components/WelcomeMessage.jsx
function WelcomeMessage() {
    return (
        <div style={{
            backgroundColor: '#3498db', 
            color: 'white', 
            padding: '20px', 
            borderRadius: '8px', 
            textAlign: 'center', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
            marginBottom: '20px'
        }}>
            <h1 style={{
                fontSize: '28px', 
                fontWeight: 'bold', 
                marginBottom: '15px'
            }}>
                Welcome to ALX React APP!
            </h1>
            <p style={{
                fontSize: '18px', 
                lineHeight: '1.6'
            }}>
                This is a simple JSX component.
            </p>
        </div>
    );
}

export default WelcomeMessage;
