#pragma strict

public var bloodPrefab: GameObject;

function Start () {

}

function Update () {
	
}

function OnCollisionEnter(col : Collision) {
	//if (col.contacts.length == 0) return;
	var instantiatedBlood : GameObject = GameObject.Instantiate(bloodPrefab, col.contacts[0].point, Quaternion());

	instantiatedBlood.transform.forward = col.contacts[0].normal;
	instantiatedBlood.transform.position += 0.1f*col.contacts[0].normal;

	var randAng : float = Random.Range(0.0f, 360.0f);
	instantiatedBlood.transform.rotation = 
		Quaternion.AngleAxis(randAng, col.contacts[0].normal)*(instantiatedBlood.transform.rotation);
}