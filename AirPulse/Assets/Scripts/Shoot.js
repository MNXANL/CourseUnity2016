#pragma strict

import UnityEngine.UI;

public var bulletPrefab : GameObject;
public var shieldPrefab : GameObject;
public var speed : float = 20.0f;
public var Cartridge : float = 20.0f;
public var Shields : float = 5.0f;
public var rateFire : float = 0.4f;


public var txt : Text; 
public var ShieldTxt : Text; 

private var time : float = 0;
private var ReloadTime : float = 0;
private var AvailableBullets : float = Cartridge;
private var AvailableShields : float = Shields;


function Start () {

}



function Update () {
	time += Time.deltaTime;
	ReloadTime += Time.deltaTime;

	if (Input.GetButtonDown("Fire") && time>rateFire && AvailableBullets > 0) {		// {0,1,2} == {Left, Right, Mouse}
		time = 0;
		var instantiatedBullet : GameObject = GameObject.Instantiate(bulletPrefab, transform.position + Vector3(0, 0, 0), transform.rotation);

		var rb : Rigidbody = instantiatedBullet.GetComponent.<Rigidbody>();
		rb.velocity = transform.up * speed;

		Physics.IgnoreCollision(instantiatedBullet.GetComponent.<Collider>(), transform.root.GetComponent.<Collider>() );
		--AvailableBullets;

	}
	
	else if (Input.GetButtonDown("Shield") && time > rateFire*10 && AvailableShields > 0) {		// {0,1,2} == {Left, Right, Mouse}
		time = 0;
		var instantiatedShield : GameObject = GameObject.Instantiate(shieldPrefab, transform.position + Vector3(0, 0, 0), transform.rotation);

		var rs : Rigidbody = instantiatedShield.GetComponent.<Rigidbody>();
		//rs.velocity = transform.up * speed;

		Physics.IgnoreCollision(instantiatedShield.GetComponent.<Collider>(), transform.root.GetComponent.<Collider>() );
		--AvailableShields;
	}

	if (Input.GetKeyDown(KeyCode.R) && AvailableBullets < Cartridge) {		// {0,1,2} == {Left, Right, Mouse}
		AvailableBullets = Cartridge;
	}

	if (ReloadTime > 4.0f && AvailableBullets > Cartridge) {
		Debug.Log("Reload!");
		++AvailableBullets;
		ReloadTime = 0;
	}
	
	if (AvailableBullets < 10) {
		txt.text = "0" + AvailableBullets.ToString() ;
		ShieldTxt.text =  AvailableShields.ToString() ;
	}
	else {
		txt.text =  AvailableBullets.ToString() ;
		ShieldTxt.text =  AvailableShields.ToString() ;
	} 
		
}


/*
	* 1. Instanciamos (spawn) la bala 
	* 2. Hacemos que las fisicas no permitan que se solapen las balas y nuestro personaje (evitar clipping)
	* 3. Dar velocidad a la bala
	* 4. Destruir la bala al final (de lo contrario se nos comen los recursos!) ->> Esto lo hace en otro script
	* N. Efectos varios (como los sonidos)

	Obtener parametros: obj.GetComponent.<LoQueQueremos>();
*/