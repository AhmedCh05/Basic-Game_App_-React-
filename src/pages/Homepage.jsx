import { useNavigate } from 'react-router-dom';
export default function Homepage(){
    const navigate = useNavigate();
    return (
        <div
          style={{
            maxWidth: "430px",
            padding: "2rem",
            backgroundColor: "black",
            borderRadius: "0.5rem",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Games Tab
          </div>
          <div
            style={{
              marginBottom: "1rem",
            }}
          >
         
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
          <div style={{padding:"2%"}}><button onClick={() => navigate('/colorgame')}>Color Game</button></div>
          <div style={{padding:"2%"}}> <button onClick={() => navigate('/animalgame')}>Animal Game</button></div>
          <div style={{padding:"2%"}}><button onClick={() => navigate('/spellinggame')}>Spelling Game</button></div>
    </div>
      </div>
      );

};