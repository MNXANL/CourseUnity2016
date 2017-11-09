#pragma strict

import UnityEngine.UI;

public var bulletPrefab : GameObject;
public var speed : float = 20.0f;
public var Cartridge : float = 50.0f;
public var rateFire : float = 0.2f;


public var txt : Text; 
public var txt2 : Text; 

private var time : float = 0;
private var AvailableBullets : float = Cartridge;


function Start () {

}



function Update () {
	time += Time.deltaTime;

	if (Input.GetMouseButton/*Down*/(0) && time>rateFire && AvailableBullets > 0) {		// {0,1,2} == {Left, Right, Mouse}
		time = 0;
		var instantiatedBullet : GameObject = GameObject.Instantiate(bulletPrefab, transform.position, transform.rotation);

		var rb : Rigidbody = instantiatedBullet.GetComponent.<Rigidbody>();
		rb.velocity = transform.forward * speed;

		Physics.IgnoreCollision(instantiatedBullet.GetComponent.<Collider>(), transform.root.GetComponent.<Collider>() );
		--AvailableBullets;

	}
	if (Input.GetKeyDown(KeyCode.R)) {
		AvailableBullets = Cartridge;
	}
	txt.text  = "topkek";
	if (AvailableBullets < 10) {
		txt.text = "[0" + AvailableBullets.ToString() + "]";
		txt2.text = "[0" + AvailableBullets.ToString() + "]";
	}
	else {
		txt.text = "[" + AvailableBullets.ToString() + "]";
		txt2.text = "[" + AvailableBullets.ToString() + "]";
	} 
		
}


/*
	* 1. Instanciamos (spawn) la bala 
	* 2. Hacemos que las fisicas no permitan que se solapen las balas y nuestro personaje (evitar clipping)
	* 3. Dar velocidad a la bala
	* 4. Destruir la bala al final (de lo contrario se nos comen los recursos!) ->> Esto lo hace en otro scr
	* N. Efectos varios (como los sonidos)

	Obtener parametros: obj.GetComponent.<LoQueQueremos>();
*/