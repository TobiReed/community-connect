import { Container } from 'react-bootstrap';

function SecurityTips() {
  return (
    <section id="owasp" className="owasp py-4">
      <Container>
        <h2>Spreading awareness for OWASP Web Application Security Risks</h2>
        <h4>A01:2021-Broken Access Control</h4>
        <p>A critical security vulnerability that occurs when an application fails to adequately enforce authorization and authentication mechanisms. Essentially, it allows individuals to access resources, data, or functionalities that they are not entitled to.</p>
        
        <h4>A07:2021-Identification and Authentication</h4>
        <p>A security vulnerability that arises when an application fails to properly verify user identities. This can lead to unauthorized access to systems and data, making it a critical area of concern in application security.</p>
        
        <h4>A03:2021-Injection</h4>
        <p>A broad category of security vulnerabilities where an attacker inserts malicious code or data into an application, causing it to execute unintended actions or expose sensitive information. These attacks exploit weaknesses in how applications handle user-supplied data, often by failing to validate or sanitize it properly.</p>
      </Container>
    </section>
  );
}
export default SecurityTips;
