package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "product_master")
public class Product {
	
<<<<<<< HEAD
	 @Id
=======
	    @Id
>>>>>>> main
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "pid")
	    private Integer pid;

<<<<<<< HEAD
	    @Column(name = "pname")
	    private String pname;

	    @Column(name = "type")
	    private String type;

	    @Column(name = "description")
	    private String description;

	    @Column(name = "packaging_unit")
	    private String packagingUnit;

		public Integer getPid() {
			return pid;
		}

		public void setPid(Integer pid) {
			this.pid = pid;
		}

		public String getPname() {
			return pname;
		}

		public void setPname(String pname) {
			this.pname = pname;
		}

		public String getType() {
			return type;
		}

		public void setType(String type) {
			this.type = type;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public String getPackagingUnit() {
			return packagingUnit;
		}

		public void setPackagingUnit(String packagingUnit) {
			this.packagingUnit = packagingUnit;
		}
	    
	    
=======

	    @Column(name = "pname")
	    private String pname;


	    @Column(name = "type")
	    private String type;


	    @Column(name = "description")
	    private String description;


	    @Column(name = "packaging_unit")
	    private String packagingUnit;
	    
	    
	    public Integer getPid() {
	        return pid;
	    }

	    public void setPid(Integer pid) {
	        this.pid = pid;
	    }

	    public String getPname() {
	        return pname;
	    }

	    public void setPname(String pname) {
	        this.pname = pname;
	    }

	    public String getType() {
	        return type;
	    }

	    public void setType(String type) {
	        this.type = type;
	    }

	    public String getDescription() {
	        return description;
	    }

	    public void setDescription(String description) {
	        this.description = description;
	    }

	    public String getPackagingUnit() {
	        return packagingUnit;
	    }

	    public void setPackagingUnit(String packagingUnit) {
	        this.packagingUnit = packagingUnit;
	    }
	    

>>>>>>> main

}
