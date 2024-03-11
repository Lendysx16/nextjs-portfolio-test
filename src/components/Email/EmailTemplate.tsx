import { EmailTemplateProps } from "@/types/types";

const EmailTemplate = ({ messageText, email }: EmailTemplateProps) => {
    return (
        <body
            style={{
                margin: 0,
                padding: 0,
                boxSizing: "border-box",
                fontFamily: "'Montserrat', sans-serif",
                backgroundColor: "#81689D",
            }}
        >
            <div
                style={{
                    border: "2px solid #81689D",
                    padding: "20px",
                    margin: "auto",
                    height: "500px",
                    width: "80%",
                    color: "#FFD0EC",
                    position: "relative",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "40px",
                        textDecoration: "underline",
                        marginBottom: "10px",
                    }}
                >
                    Hello!
                </h1>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <a
                        style={{
                            textDecoration: "none",
                            fontSize: "15px",
                            margin: "auto",
                            color: "#FFD0EC",
                        }}
                        type="email"
                    >
                        {email}
                    </a>
                </div>
                <p style={{ marginTop: "15px", padding: "20px" }}>
                    {messageText}
                </p>
                <div
                    style={{ position: "absolute", bottom: 0, margin: "auto" }}
                >
                    {new Date().getFullYear().toString()}
                </div>
            </div>
        </body>
    );
};

EmailTemplate.propTypes = {};

export default EmailTemplate;
