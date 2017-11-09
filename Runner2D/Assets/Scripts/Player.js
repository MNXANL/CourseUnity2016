#pragma strict

import UnityEngine.SceneManagement;
import UnityEngine.UI;

public var maxSpeed : float = 7.0f;
public var moveForce : float = 40.0f;

public var Score : GameObject ;



function Update () {
	if (transform.position.y < -10 || Input.GetKeyDown(KeyCode.R)) {
		Score.SendMessage("OnPlayerDie");
		SceneManager.LoadScene(SceneManager.GetActiveScene().name);
	}
}

function FixedUpdate () {
	var rb : Rigidbody2D = GetComponent.<Rigidbody2D>();
	if (rb.velocity.x > maxSpeed) {
		rb.velocity.x = maxSpeed;
	}
	else {
		rb.AddForce(Vector2.right * moveForce);
	}

}
