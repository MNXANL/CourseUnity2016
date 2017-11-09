#pragma strict

private var rotVel : float = 5.0f;

function Start () {

}

function Update () {
	transform.rotation.eulerAngles.z += rotVel;	
}

function OnCollisionEnter(col : Collision){
	if(col.gameObject.CompareTag("Player"))	{
		SceneManager.LoadScene((SceneManager.GetActiveScene().buildIndex + 1) % (SceneManager.sceneCount+1));
	}
}
