import { GoogleLogin } from 'react-google-login';

const clientId = "323456269818-a8d34qapnol64tej4s9g8e6dksli2qge.apps.googleusercontent.com";

const googleBtn = ({action}) => {

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Welcome: ", res.profileObj);

        // Extract user name and email
        const { name, email, googleId, imageUrl } = res.profileObj;

        // Prepare the payload
        const payload = {
            name: name,
            email: email,
            googleId: googleId,
            imageUrl: imageUrl

        };
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })

        // Send the payload to the backend
        
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    const onFailure = (res) => {
        console.log("LOGIN FAILED! response: ",res)
    };

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText={action + " with Google"}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    );
};

export default googleBtn;