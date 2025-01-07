import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title={props.name} backgroundColor="#4ea04e">
            <p>안녕하세요, {props.name}입니다.</p>
        </Card>
    );
}

export default ProfileCard;