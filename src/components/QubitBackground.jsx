import './QubitBackground.css';

function QubitBackground() {
  // Generate random quantum states with different theta (polar angle) and phi (azimuthal angle)
  const generateQuantumState = () => {
    // theta: 0 to π (polar angle from |0⟩ to |1⟩)
    const theta = Math.random() * Math.PI;
    // phi: 0 to 2π (azimuthal angle, represents phase)
    const phi = Math.random() * 2 * Math.PI;

    // Convert spherical to Cartesian coordinates for Bloch sphere
    // Bloch sphere has radius 45, centered at (50, 50)
    const r = 45;
    const x = 50 + r * Math.sin(theta) * Math.cos(phi);
    const y = 50 + r * Math.sin(theta) * Math.sin(phi);
    const z = 50 - r * Math.cos(theta); // Negative because SVG y-axis points down

    return { x, y, z, theta, phi };
  };

  // Create multiple qubit diagrams with different positions, delays, and quantum states
  const qubits = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 10,
    duration: 15 + Math.random() * 10,
    size: 40 + Math.random() * 40,
    state: generateQuantumState()
  }));

  return (
    <div className="qubit-background">
      {qubits.map((qubit) => {
        const { x, y, z } = qubit.state;

        return (
          <div
            key={qubit.id}
            className="qubit"
            style={{
              left: `${qubit.left}%`,
              animationDelay: `${qubit.animationDelay}s`,
              animationDuration: `${qubit.duration}s`,
              width: `${qubit.size}px`,
              height: `${qubit.size}px`
            }}
          >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Bloch sphere representation */}
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(100, 108, 255, 0.3)" strokeWidth="2"/>
              <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="rgba(100, 108, 255, 0.3)" strokeWidth="1.5"/>
              <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(100, 108, 255, 0.3)" strokeWidth="1.5"/>
              <line x1="5" y1="50" x2="95" y2="50" stroke="rgba(100, 108, 255, 0.3)" strokeWidth="1.5"/>

              {/* State vector - from center to calculated position */}
              <line
                x1="50"
                y1="50"
                x2={x}
                y2={z}
                stroke="rgba(100, 108, 255, 0.6)"
                strokeWidth="2.5"
              />
              <circle
                cx={x}
                cy={z}
                r="4"
                fill="rgba(100, 108, 255, 0.8)"
              />

              {/* Labels */}
              <text x="50" y="100" textAnchor="middle" fontSize="12" fill="rgba(100, 108, 255, 0.4)">|ψ⟩</text>
            </svg>
          </div>
        );
      })}
    </div>
  );
}

export default QubitBackground;
