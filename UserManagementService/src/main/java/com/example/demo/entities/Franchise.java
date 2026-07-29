package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "franchise")
public class Franchise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int fid;

    @OneToOne
    @JoinColumn(name = "uid", nullable = false)
    private User user;

    @Column(name="fname")
    private String franchiseName;

    @Column
    private String address;

    @Column
    private long regno;

    @Column
    private int status;

    public Franchise() {
    }

    public Franchise(User user, String fname, String address, long regno, int status) {
        this.user = user;
        this.franchiseName = fname;
        this.address = address;
        this.regno = regno;
        this.status = status;
    }
}