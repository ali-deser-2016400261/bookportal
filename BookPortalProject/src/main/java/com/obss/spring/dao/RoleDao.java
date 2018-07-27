package com.obss.spring.dao;

import java.util.List;
import java.util.Map;

import com.obss.spring.bean.Role;

public interface RoleDao {
	public Role addRole(Role role);

	public Role updateRole(Role ole, int roleId);

	public void deleteRole(int roleId);

	public Role getRole(int roleId);
	
	public List<Map<String,Object>> getAll();
}
