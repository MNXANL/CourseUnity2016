#pragma strict

import UnityEngine.SceneManagement;

function Start () {

}

function Update () {
	transform.Rotate(Vector3.up, 100*Time.deltaTime);
}

function OnCollisionEnter (col : Collision) {
	Debug.Log("HIT");
	if (col.gameObject.CompareTag("Player")) {
		SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex+1 % SceneManager.sceneCount+1);
	}
}

function OnDrawGizmos() {
	Gizmos.color = Color(0,1,0);
	Gizmos.DrawWireSphere(transform.position, transform.localScale.x/2);
}