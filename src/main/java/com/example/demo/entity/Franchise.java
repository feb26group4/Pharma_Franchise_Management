package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
<<<<<<< HEAD
=======
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
>>>>>>> main
import jakarta.persistence.Table;

@Entity
@Table(name = "franchise")
public class Franchise {
<<<<<<< HEAD

	 @Id
=======
	
	    @Id
>>>>>>> main
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "fid")
	    private Integer fid;

<<<<<<< HEAD
	    @Column(name = "uid")
	    private Integer uid;
=======
	    
	    @ManyToOne
	    @JoinColumn(name = "uid")
	    private User user;

>>>>>>> main

	    @Column(name = "fname")
	    private String fname;

<<<<<<< HEAD
	    @Column(name = "address")
	    private String address;

	    @Column(name = "regno")
	    private Long regno;

	    @Column(name = "status")
	    private Boolean status;

		public Integer getFid() {
			return fid;
		}

		public void setFid(Integer fid) {
			this.fid = fid;
		}

		public Integer getUid() {
			return uid;
		}

		public void setUid(Integer uid) {
			this.uid = uid;
		}

		public String getFname() {
			return fname;
		}

		public void setFname(String fname) {
			this.fname = fname;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public Long getRegno() {
			return regno;
		}

		public void setRegno(Long regno) {
			this.regno = regno;
		}

		public Boolean getStatus() {
			return status;
		}

		public void setStatus(Boolean status) {
			this.status = status;
		}
	    
	    
=======

	    @Column(name = "address")
	    private String address;


	    @Column(name = "regno")
	    private Long regno;


	    @Column(name = "status")
	    private Boolean status = true;

	    
	    public Integer getFid() {
	        return fid;
	    }

	    public void setFid(Integer fid) {
	        this.fid = fid;
	    }

	    public User getUser() {
	        return user;
	    }

	    public void setUser(User user) {
	        this.user = user;
	    }

	    public String getFname() {
	        return fname;
	    }

	    public void setFname(String fname) {
	        this.fname = fname;
	    }

	    public String getAddress() {
	        return address;
	    }

	    public void setAddress(String address) {
	        this.address = address;
	    }

	    public Long getRegno() {
	        return regno;
	    }

	    public void setRegno(Long regno) {
	        this.regno = regno;
	    }

	    public Boolean getStatus() {
	        return status;
	    }

	    public void setStatus(Boolean status) {
	        this.status = status;
	    }

>>>>>>> main
}
